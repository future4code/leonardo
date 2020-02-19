import { BaseDataBase } from "./baseDataBase";
import {
    CreateUserGateway,
    GetUserByEmailGateway,
    VerifyUserExistGateway,
    GetAllUsersGateway
} from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user/user";
import {GetAllUsersUCOutput} from "../business/usecases/user/getAllUsers";

export class UserDataBase extends BaseDataBase implements
    CreateUserGateway,
    GetUserByEmailGateway,
    VerifyUserExistGateway,
    GetAllUsersGateway{
    private static TABLE_USERS: string = "Users"

    async createUser(user: User): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${UserDataBase.TABLE_USERS} (id, name, birthday, email , photo, password)
        VALUES ("
        ${user.getId()}",
         "${user.getName()}",
           "${user.getBirthday().toISOString().split('T')[0]}",
           "${user.getEmail()}",
            "${user.getPhoto()}",
            "${user.getPassword()}");
        `);
    }

    async getUserByEmail(email: string): Promise<User>{
        const query = await this.connection.raw(`
        SELECT * from ${UserDataBase.TABLE_USERS} 
        WHERE ${UserDataBase.TABLE_USERS}.email="${email}";
        `)
        const user = query[0][0]
        if(!user){
            throw new Error("Usuário não encontrado")
        }
        return new User(user.id, user.name, user.email, user.birthday, user.photo, user.password)

    }

    public async verifyUserExist(userId: string): Promise<boolean> {
        const result = await this.connection.raw(`
        SELECT * from ${UserDataBase.TABLE_USERS}
        WHERE id="${userId}";`)
        return result[0][0];

    }

    async getAllUsers(userId: string): Promise<GetAllUsersUCOutput> {
        const query = await this.connection.raw(`
        SELECT id, name, birthday, email, photo FROM ${UserDataBase.TABLE_USERS};`)
        const usersFromDb: ModelUserFromDB[] = query[0]
        return {
            users: usersFromDb.map(user => ({
                id: user.id,
                name: user.name,
                birthday: this.getSQLDateFromTSDate(new Date(user.birthday)),
                email: user.email,
                photo: user.photo
            }))
        }
    }
}

export interface ModelUserFromDB {
    id: string,
    name: string,
    birthday: string,
    email: string,
    photo: string,
    password: string,
    email_code: string
}