import {User} from "../../entities/user";

export interface CreateUserGateway {
    createUser(user: User): Promise<void>
}

export interface GetUserByEmailGateway {
    getUserByEmail(email: string): Promise<User>
}

export interface GetUserByIdGateway {
    getUserById(id: string): Promise<boolean>
}

export interface VerifyUserExistGateway {
    verifyUserExist(userId: string): Promise<boolean>
}

export interface CreateUserRelationGateway {
    createUserRelation(requesterId: string, requestedId: string): Promise<void>
}

export interface EraseRelationUserGateway {
    eraseUserRelation(requesterId: string, requestedId: string): Promise<void>
}