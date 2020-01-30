import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {RelateUserGateway, VerifyUserExistGateway} from "../../gateways/user/userGateway";

export class RelateUserUC {
    constructor(
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
        private relateUserGateway: RelateUserGateway,
        private verifyUserExistGateway: VerifyUserExistGateway
    ) {
    }
    async execute(input: RelateUserUCInput) :Promise<RelateUserUCOutput>{
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        const verifyUser = await this.verifyUserExistGateway.verifyUserExist(input.userIdToRelate)
        if(!verifyUser){
            throw new Error("Usuário não existe")
        }
        try{
            await this.relateUserGateway.relateUser(userId, input.userIdToRelate)
            return {
                message: "Operação realizada com sucesso"
            }
        } catch (error) {
            return error.message
        }
    }
}

export interface RelateUserUCInput {
    token: string,
    userIdToRelate: string
}

export interface RelateUserUCOutput {
    message: string
}