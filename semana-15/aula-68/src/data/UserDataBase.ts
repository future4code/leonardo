import { UserGateway } from "../business/gateways/UserGateway";
import knex from 'knex'
import { User } from "../business/entities/User";
import { AuthenticationGateway } from "../business/gateways/authenticationGateway";

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

export class UserDataBase implements UserGateway {
  private connection: knex
  private userMapper: UserMapper

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'leonardo',
        password: 'c9e5f699eea13f088949aa3b4614241f',
        database: 'leonardo'
      }
    })
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
    `).then(res => {
      return res[0][0]
    })
    return this.userMapper.modeltoEntity(query)
  }

  async updatePassword(id: string, password: string): Promise<void> {
    const query = await this.connection.raw(`
      UPDATE users
      SET password = "${password}"
      WHERE id = "${id}"`).then(res => {
      return res[0][0]
    })
    
  }

}