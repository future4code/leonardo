import {Video} from "../../entities/video/video";
import {GetVideoInformationGateway} from "../../gateways/video/videoGateway";

export class GetVideoInformationUC {
    constructor(
        private getVideoInformationGateway: GetVideoInformationGateway
    ) {
    }
    
    async execute(input: GetVideoInformationUCInput): Promise<GetVideoInformationUCOutput> {
        return {
            video: await this.getVideoInformationGateway.getVideoInformation(input.videoId)
        }
    }
}

export interface GetVideoInformationUCInput {
    videoId: string
}

export interface GetVideoInformationUCOutput {
    video: Video
}