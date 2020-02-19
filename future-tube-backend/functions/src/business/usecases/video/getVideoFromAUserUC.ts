import {Video} from "../../entities/video/video";
import {GetVideoFromAUserGateway} from "../../gateways/video/videoGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetVideoFromAUserUC {
    constructor(
        private getVideoFromAUserGateway: GetVideoFromAUserGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {
    }

    async execute(input: GetVideoFromAUserUCInput): Promise<GetVideoFromAUserUCOutput> {
        if (!input.userId)
            input.userId = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)

        return await this.getVideoFromAUserGateway.getVideosFromAUser(input.userId)
    }
}

export interface GetVideoFromAUserUCInput {
    token: string
    userId: string
}

export interface GetVideoFromAUserUCOutput {
    videos: Video[]
}