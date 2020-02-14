import {UploadVideoGateway} from "../../gateways/video/videoGateway";
import {Video} from "../../entities/video/video";
import {IdGeneratorGateway} from "../../gateways/services/IdGeneratorGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class UploadVideoUC {
    constructor(
        private uploadVideoGateway: UploadVideoGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }
    
    async execute(input: UploadVideoUCInput): Promise<UploadVideoUCOutput>{
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        this.validateInput(input)
        const newVideo = new Video(
            this.idGeneratorGateway.generate(),
            input.url,
            input.title,
            input.description,
            userId
        )

        await this.uploadVideoGateway.uploadVideo(newVideo)

        return {
            message: "Upload do video realizado com sucesso"
        }
    }

    validateInput(input:UploadVideoUCInput ) {
        if (!input.token || !input.description || !input.title || !input.url)
            throw new Error("Dado do video faltando")
    }
}

export interface UploadVideoUCInput {
    url: string
    description: string
    title: string
    token: string
}

export interface UploadVideoUCOutput {
    message: string
}