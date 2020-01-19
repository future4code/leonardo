import { UserGateway } from "../business/gateways/user/userGateway";
import { User } from "../business/entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserModel {
  constructor(public id: string,
    public email: string,
    public password: string
  ) {
  }
}

class UserMapper {
  entityToModel(user: User): UserModel {
    return {
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword()
    }
  }
  modeltoEntity(model: UserModel): User {
    return new User(model.id, model.email, model.password)
  }
}

export class UserDataBase extends BaseDataBase implements UserGateway  {

  private userMapper: UserMapper

  constructor() {
    super()
    this.userMapper = new UserMapper()
  }

  async createUser(user: User) {

    await this.connection('users').insert(user);
  }

  async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection.raw(`
      SELECT * FROM users
      WHERE users.email="${email}";
    `).then(res => {
      return res[0][0]
    })
    return this.userMapper.modeltoEntity(query)
  }

  async getUserById(id: string): Promise<User> {
    const query = await this.connection.raw(`
      SELECT * FROM users
      WHERE users.id="${id}";
    `)

    const result = query[0][0]
    if (!result) {
      throw new Error("Usuário não encontrado")
    }
    return this.userMapper.modeltoEntity(result)
  }

  async updatePassword(id: string, password: string): Promise<void> {
    const query = await this.connection.raw(`
      UPDATE users
      SET password = "${password}"
      WHERE id = "${id}";`).then(res => {
      return res[0][0]
    })
  }

  async verifyUserExists(id: string): Promise<boolean> {
    const query = await this.connection.raw(`
    SELECT * FROM users
    WHERE users.id="${id}";
  `)
    const result = query[0][0]
    if (!result) {
      return false
    }
    return true
  }

  async createUserRelation(followerId: string, followedId: string): Promise<void>{
    await this.connection.raw(
      `INSERT INTO
      users_relations (follower_id, followed_id)
      VALUES ("${followerId}","${followedId}")
      `)
  }

  public async getAllUsers(): Promise<User[]> {
    const query = this.connection.raw("SELECT * FROM users;");
    const users = await query;
    return users[0].map(
        (user: any) =>
            new User(user.id, user.email, user.password)
    );
  }
}