import {Video} from "../../entities/video/video";
import {GetVideoFromAUserGateway} from "../../gateways/video/videoGateway";

export class GetVideoFromAUserUC {
    constructor(
        private getVideoForAUserGateway: GetVideoFromAUserGateway
    ) {
    }
    
    async execute(input: GetVideoForAUserUCInput):Promise<GetVideoForAUserUCOutput>{
        const userId = this.validateInput(input)

        return await this.getVideoForAUserGateway.getVideosForAUser(userId)

    }

    validateInput(input:GetVideoForAUserUCInput ): string {
        if (!input.userId){
            //TODO GET USER FROM TOKEN
            return "userId"
        }else {
            return input.userId
        }
    }
}

export interface GetVideoForAUserUCInput {
    userId: string
}

export interface GetVideoForAUserUCOutput {
    videos: Video[]
}