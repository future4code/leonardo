import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {GetAllUsersGateway} from "../../gateways/user/userGateway";

export class GetAllUsersUC {
    constructor(
        private getAllUsersGateway: GetAllUsersGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }

    async execute(input: GetAllUsersUCInput): Promise<GetAllUsersUCOutput> {
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        const usersFromDb = await this.getAllUsersGateway.getAllUsers(userId)
        console.log("users from db", usersFromDb)
        return {
            users: usersFromDb.users.map((user) => ({
                id: user.id,
                name: user.name,
                birthday: user.birthday,
                email: user.email,
                photo: user.photo
            }))
        }
    }
}

export interface GetAllUsersUCInput {
    token: string
}

export interface GetAllUsersUCOutput {
    users: UsersOfGetAllUsersUCOutput[]
}

export interface UsersOfGetAllUsersUCOutput {
    id: string
    name: string
    birthday: string
    email: string
    photo: string
}
