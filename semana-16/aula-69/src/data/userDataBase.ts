import { BaseDataBase } from "./baseDataBase";
import {
    CreateUserGateway,
    CreateUserRelationGateway, EraseRelationUserGateway,
    GetUserByEmailGateway,
    VerifyUserExistGateway
} from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user";

export class UserDataBase extends BaseDataBase implements
    CreateUserGateway,
    GetUserByEmailGateway,
    VerifyUserExistGateway,
    CreateUserRelationGateway,
    EraseRelationUserGateway{
    private static TABLE_USERS: string = "users_future"
    private static TABLE_RELATIONS: string = "users_relations_future_book"

    async createUser(user: User): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${UserDataBase.TABLE_USERS} (id, name, email, password)
        VALUES ("${user.getId()}", "${user.getName()}", "${user.getEmail()}", "${user.getPassword()}")
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
        return new User(user.id, user.name, user.email, user.password)

    }

    async verifyUserExist(userId: string): Promise<boolean> {
        const result = await this.connection.raw(`
        SELECT * from ${UserDataBase.TABLE_USERS}
        WHERE id="${userId}";`)
        if(!result[0][0]){
            return false
        }
        return true
    }

    async createUserRelation(requesterId: string, requestedId: string): Promise<void> {
        const hasRelation = await this.connection.raw(`
        SELECT * FROM ${UserDataBase.TABLE_RELATIONS} WHERE requester_id="${requesterId}" AND requested_id="${requestedId}"; `)
        if(hasRelation[0][0]){
            throw new Error("Usuário já possui amizade com esta pessoa")
        }else {
        await this.connection.raw(`
        INSERT INTO ${UserDataBase.TABLE_RELATIONS} (requester_id, requested_id)
        VALUES ("${requesterId}", "${requestedId}");
        `)}
    }

    async eraseUserRelation(requesterId: string, requestedId: string): Promise<any> {
        const hasRelation = await this.connection.raw(`
        SELECT * FROM ${UserDataBase.TABLE_RELATIONS} WHERE requester_id="${requesterId}" AND requested_id="${requestedId}"; `)
        if(!hasRelation[0][0]){
            throw new Error("Usuário nao possui amizade com esta pessoa")
        }else {
            await this.connection.raw(`
        DELETE FROM ${UserDataBase.TABLE_RELATIONS} WHERE requester_id="${requesterId}" AND requested_id="${requestedId}";
        `)}
    }
}