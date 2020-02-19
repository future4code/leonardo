import {User} from "../../entities/user/user";
import {GetAllUsersUCOutput} from "../../usecases/user/getAllUsers";

export interface CreateUserGateway {
    createUser(user: User): Promise<void>;
}

export interface GetUserByEmailGateway {
    getUserByEmail(email: string): Promise<User>;
}

export interface GetUserByIdGateway {
    getUserById(id: string): Promise<boolean>;
}

export interface GetAllUsersGateway {
    getAllUsers(userId: string): Promise<GetAllUsersUCOutput>
}

export interface VerifyUserExistGateway {
    verifyUserExist(userId: string): Promise<boolean>;
}


export interface UpdateEmailCodeGateway {
    updateEmailCode(userId: string, emailCode: string): Promise<void>
}

export interface UpdatePasswordGateway {
    updatePassword(userId: string, password: string): Promise<void>
}
