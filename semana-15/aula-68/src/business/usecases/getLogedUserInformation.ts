import { AuthenticationGateway } from "../gateways/auth/authenticationGateway";
import { UserGateway } from "../gateways/user/userGateway";

export class GetLogedUserInformation {
    constructor(
        private userGateway: UserGateway,
        private authenticationGateway: AuthenticationGateway

    ) { }

    async execute(token: string): Promise<GetLogedUserInformationIput> {
        const userId = this.authenticationGateway.getUserIdFromToken(token)
        const user = await this.userGateway.getUserById(userId)

        return {
            id: user.getId(),
            email: user.getEmail()
        }
    }
}

export interface GetLogedUserInformationIput {
    id: string;
    email: string
}