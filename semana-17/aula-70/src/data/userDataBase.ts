import { BaseDataBase } from "./baseDataBase";
import {
    CreateUserGateway,
    GetAllUsersGateway,
    GetMatchesGateway,
    RelateUserGateway,
    VerifyUserExistGateway
} from "../business/gateways/user/userGateway";
import { User } from "../business/entities/user";
import {GetAllUsersUCOutput} from "../business/usecases/user/getAllUsers";
import {GetMatchesUCOutput} from "../business/usecases/user/getMatches";

export class UserDataBase extends BaseDataBase implements
    CreateUserGateway,
    GetAllUsersGateway,
    RelateUserGateway,
    VerifyUserExistGateway,
    GetMatchesGateway {

    private static TABLE_USERS: string = "Users"
    private static TABLE_RELATIONS: string = "Matches"

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

    async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(`
        SELECT * FROM ${UserDataBase.TABLE_USERS} 
        WHERE ${UserDataBase.TABLE_USERS}.email="${email}";
        `)
        const user = query[0][0]
        if (!user) {
            throw new Error("Usuário não encontrado")
        }
        return new User(user.id, user.name, new Date(user.birthday), user.email, user.photo, user.password)
    }

    async verifyUserExist(userId: string): Promise<boolean> {
        const result = await this.connection.raw(`
        SELECT * from ${UserDataBase.TABLE_USERS}
        WHERE id="${userId}";`)
        if (!result[0][0]) {
            return false
        }
        return true
    }

    async relateUser(userId: string, userIdToRelate: string): Promise<void> {
        const verifyUserRelation = await this.verifyUserRelation(userId, userIdToRelate)
        if (!verifyUserRelation) {
           await this.createUserRelation(userId, userIdToRelate)
        } else {
            await this.updateUserRelation(userId, userIdToRelate)
        }
    }

    async createUserRelation(userId: string, userIdToRelate: string): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${UserDataBase.TABLE_RELATIONS}
            (requester_id, requested_id)
            VALUES ("${userId}", "${userIdToRelate}")
            ;`)
    }

    async updateUserRelation(userId: string, userIdToRelate: string): Promise<void> {
        await this.connection.raw(`
            UPDATE ${UserDataBase.TABLE_RELATIONS}
            SET not_like = NOT not_like
            WHERE requester_id="${userId}" AND requested_id="${userIdToRelate}";
            `)
    }

    async verifyUserRelation(userId: string, userIdToRelate: string): Promise<boolean> {
        const query = await this.connection.raw(`
        SELECT * FROM ${UserDataBase.TABLE_RELATIONS}
        WHERE requester_id="${userId}" AND requested_id="${userIdToRelate}";`)
        const result = query[0][0]
        if (!result)
            return false
        return true
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

    async getMatches(userId: string): Promise<GetMatchesUCOutput> {
        const query = await this.connection.raw(`
        SELECT u.id, u.name, u.birthday, u.email, u.photo FROM ${UserDataBase.TABLE_RELATIONS} m
        JOIN ${UserDataBase.TABLE_USERS} u ON m.requested_id=u.id
        WHERE requester_id="${userId}" AND not_like=0;`)
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
}