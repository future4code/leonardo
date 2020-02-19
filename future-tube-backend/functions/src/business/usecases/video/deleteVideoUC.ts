import {DeleteVideoGateway, VerifyVideoExistGateway} from "../../gateways/video/videoGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class DeleteVideoUC {
    constructor(
        private verifyVideoExistGateway: VerifyVideoExistGateway,
        private deleteVideoGateway: DeleteVideoGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }

    async execute(input: DeleteVideoUCInput): Promise<DeleteVideoUCOutput> {
        this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        if (!await this.verifyVideoExistGateway.verifyVideoExist(input.videoId)) {
            throw new Error("Video não encontrado")
        }

        await this.deleteVideoGateway.deleteVideo(input.videoId)

        return {
            message: "Video Deletado com sucesso"
        }
    }
}

export interface DeleteVideoUCInput {
    videoId: string
    token: string
}

export interface DeleteVideoUCOutput {
    message: string
}