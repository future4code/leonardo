import {User} from "../../entities/User";
import {UserGateway} from "../../gateways/user/userGateway";

export class getAllUsersUC {
    constructor(
        private userGateway:UserGateway
    ) {
    }

    async execute(): Promise<getAllUsersOutput>{
        const results = await this.userGateway.getAllUsers()
        return {
            Users: results.map((result) => ({
                id: result.getId(),
                email: result.getEmail(),

            }))
        }
    }
}

export interface getAllUsersOutput {
    Users: UserOutput[]
}

export interface UserOutput {
    id: string,
    email: string
}