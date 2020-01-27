import { BaseDataBase } from "./baseDataBase";
import {
    CreateUserGateway
} from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user";

export class UserDataBase extends BaseDataBase implements
    CreateUserGateway{
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
}