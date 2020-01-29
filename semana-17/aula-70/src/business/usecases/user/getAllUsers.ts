import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {GetAllUsersGateway, GetAllUsersResponse} from "../../gateways/user/userGateway";

export class GetAllUsersUC {
    constructor(
        private getAllUsersGateway: GetAllUsersGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }
    async execute(input: GetAllUsersUCInput): Promise<GetAllUsersResponse[]> {
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        return await this.getAllUsersGateway.getAllUsers(userId)
    }
}

export interface GetAllUsersUCInput {
    token: string
}
