import { BaseDataBase } from "./baseDataBase";
import {
    CreateUserGateway, GetAllUsersGateway, GetAllUsersResponse
} from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user";

export class UserDataBase extends BaseDataBase implements
    CreateUserGateway,
    GetAllUsersGateway{
    private static TABLE_USERS: string = "Users"
    private static TABLE_RELATIONS: string = "users_relations_future_book"

    async createUser(user: User): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${UserDataBase.TABLE_USERS} 
        (id, name, birthday, email, photo,  password)
        VALUES
        ("${user.getId()}",
         "${user.getName()}",
         "${user.getBirthday().toISOString().split('T')[0]}",
         "${user.getEmail()}",
         "${user.getPhoto()}",
         "${user.getPassword()}")
        `);
    }

    async getUserByEmail(email: string): Promise<User>{
        const query = await this.connection.raw(`
        SELECT * FROM ${UserDataBase.TABLE_USERS} 
        WHERE ${UserDataBase.TABLE_USERS}.email="${email}";
        `)
        const user = query[0][0]
        if(!user){
            throw new Error("Usuário não encontrado")
        }
        return new User(user.id, user.name, new Date(user.birthday), user.email, user.photo, user.password)
    }

    async getAllUsers(userId: string): Promise<GetAllUsersResponse[]> {
        const query = await this.connection.raw(`
        SELECT id, name, birthday, email, photo FROM ${UserDataBase.TABLE_USERS};`)
        const  usersFromDb: ModelUserFromDB[] = query[0]
        return usersFromDb.map(user => ({
            users: {
                id :user.id,
                name: user.name,
                birthday: this.getSQLDateFromTSDate(new Date(user.birthday)),
                email: user.email,
                photo: user.photo
            }
        }))
    }
}

export interface ModelUserFromDB {
    id: string,
    name: string,
    birthday: string,
    email: string,
    photo: string,
}