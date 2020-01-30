import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {GetMatchesGateway} from "../../gateways/user/userGateway";

export class GetMatchesUC {
    constructor(
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
        private getMatchesGateway: GetMatchesGateway
    ) {
    }
    async execute(input: GetMatchesUCInput): Promise<GetMatchesUCOutput>{
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        const matches = await this.getMatchesGateway.getMatches(userId)
        return {
            users: matches.users.map((user) =>({
                id: user.id,
                name: user.name,
                birthday: user.birthday,
                email: user.email,
                photo: user.photo
            }))
        }
    }
}

export interface GetMatchesUCInput {
    token: string
}

export interface GetMatchesUCOutput {
    users: UserForGetMatchesOutput[]
}

export interface UserForGetMatchesOutput {
    id: string
    name: string
    birthday: string
    email: string
    photo: string
}