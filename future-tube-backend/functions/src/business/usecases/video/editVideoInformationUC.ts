import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {EditVideoInformationGateway, VerifyVideoExistGateway} from "../../gateways/video/videoGateway";

export class EditVideoInformationUC {
    constructor(
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
        private editVideoInformationGateway: EditVideoInformationGateway,
        private verifyVideoExistGateway: VerifyVideoExistGateway
    ) {
    }

    async execute(input: EditVideoInformationUCInput): Promise<EditVideoInformationUCOutput> {
        await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        await this.verifyVideoExistGateway.verifyVideoExist(input.videoId)
        const alteration: VideoAlteration = this.validateInput(input)
        await this.editVideoInformationGateway.editVideoInformation(input.videoId, alteration)

        return {
            message: "Video alterado com sucesso"
        }
    }

    validateInput(input: EditVideoInformationUCInput): VideoAlteration {
        if (!input.title && !input.description) {
            throw new Error("Informar o campo que deseja alterar")
        } else if (input.description && input.title) {
            throw new Error("Alterar um campo por solicitação")
        }
        if (!input.title)
            return {
                value: input.description,
                field: "description"
            }
        return {
            value: input.title,
            field: "title"
        }
    }
}

export interface VideoAlteration {
    value: string
    field: string
}

export interface EditVideoInformationUCInput {
    token: string
    videoId: string
    title: string
    description: string
}

export interface EditVideoInformationUCOutput {
    message: string
}