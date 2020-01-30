import {User} from "../../entities/user";
import {GetAllUsersUCOutput} from "../../usecases/user/getAllUsers";
import {GetMatchesUCOutput} from "../../usecases/user/getMatches";

export interface CreateUserGateway {
    createUser(user: User): Promise<void>
}

export interface GetUserByEmailGateway {
    getUserByEmail(email: string): Promise<User>
}

export interface VerifyUserExistGateway {
    verifyUserExist(userId: string): Promise<boolean>
}

export interface GetAllUsersGateway {
    getAllUsers(userId: string): Promise<GetAllUsersUCOutput>
}

export interface RelateUserGateway {
    relateUser(userId: string, userIdToRelate: string): Promise<void>
}

export interface GetMatchesGateway{
    getMatches(userId: string): Promise<GetMatchesUCOutput>
}

