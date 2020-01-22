import {EraseRelationUserGateway, VerifyUserExistGateway} from "../../gateways/user/userGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class EraseRelationUC {
    constructor(
        private verifyUserExistGateway: VerifyUserExistGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
        private eraseRelationUserGateway: EraseRelationUserGateway
    ) {
    }

    async execute(input: EraseRelationUCInput): Promise<EraseRelationUCOutput>{
        const userToEraseRelation = await this.verifyUserExistGateway.verifyUserExist(input.userIdToEraseRelation)

        if(!userToEraseRelation){
            throw new Error("Usuário não encontrado")
        }

        const requesterUserId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)

        await this.eraseRelationUserGateway.eraseUserRelation(requesterUserId, input.userIdToEraseRelation)

        return {
            message: "Desfeita a amizade"
        }
    }
}

export interface EraseRelationUCInput {
    token: string,
    userIdToEraseRelation: string
}

export interface EraseRelationUCOutput {
    message: string
}