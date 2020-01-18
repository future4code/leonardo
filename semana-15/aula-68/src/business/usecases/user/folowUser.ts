import { UserGateway } from "../../gateways/user/userGateway";

export class FollowUserUC {
    constructor(
        private userGateway: UserGateway,

    ){}
    
    async execute(input :FollowUserInput){
        this.verifyUserExists(input)

        await this.userGateway.createUserRelation(input.followerId, input.followedId)

    }

    async verifyUserExists(input: FollowUserInput){
        await Promise.all([
            await this.userGateway.verifyUserExists(input.followerId),
            await this.userGateway.verifyUserExists(input.followedId)])
    }

}

export interface FollowUserInput {
    followerId: string
    followedId: string
}

