import {GetVideoInformationGateway, VerifyVideoExistGateway} from "../../gateways/video/videoGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetVideoInformationUC {
    constructor(
        private getVideoInformationGateway: GetVideoInformationGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
        private verifyVideoExistGateway: VerifyVideoExistGateway
    ) {
    }

    async execute(input: GetVideoInformationUCInput): Promise<GetVideoInformationUCOutput> {
        await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        if (!await this.verifyVideoExistGateway.verifyVideoExist(input.videoId)) {
            throw new Error("Video não encontrado")
        } else {
            return await this.getVideoInformationGateway.getVideoInformation(input.videoId)
        }
    }
}

export interface GetVideoInformationUCInput {
    videoId: string,
    token: string
}

export interface GetVideoInformationUCOutput {
    title: string
    description: string
    url: string
    userName: string
    userPhoto: string
}