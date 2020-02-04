import {UploadVideoGateway} from "../../gateways/video/videoGateway";
import {Video} from "../../entities/video/video";
import {IdGeneratorGateway} from "../../gateways/services/idGenerator";

export class UploadVideoUC {
    constructor(
        private uploadVideoGateway: UploadVideoGateway,
        private idGeneratorGateway: IdGeneratorGateway
    ) {
    }
    
    async execute(input: UploadVideoUCInput): Promise<UploadVideoUCOutput>{
        //TODO GET USER FROM TOKEN
        this.validateInput(input)
        const newVideo = new Video(
            this.idGeneratorGateway.generate(),
            input.url,
            input.title,
            input.description,
            input.userId
        )

        await this.uploadVideoGateway.uploadVideo(newVideo)

        return {
            message: "Upload do video realizado com sucesso"
        }
    }

    validateInput(input:UploadVideoUCInput ) {
        if (!input.userId || !input.description || !input.title || !input.url)
            throw new Error("Dado do video faltando")
    }
}

export interface UploadVideoUCInput {
    url: string
    description: string
    title: string
    userId: string
}

export interface UploadVideoUCOutput {
    message: string
}