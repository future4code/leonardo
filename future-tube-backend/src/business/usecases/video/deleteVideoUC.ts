import {DeleteVideoGateway, VerifyVideoExistGateway} from "../../gateways/video/videoGateway";

export class DeleteVideoUC {
    constructor(
        private verifyVideoExistGateway: VerifyVideoExistGateway,
        private deleteVideoGateway: DeleteVideoGateway
    ) {
    }
    
    async execute(input: DeleteVideoUCInput) : Promise<DeleteVideoUCOutput>{
        if (! await this.verifyVideoExistGateway.verifyVideoExist(input.videoId)){
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
}

export interface DeleteVideoUCOutput {
    message: string
}