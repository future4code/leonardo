import {CreateUserRelationGateway, VerifyUserExistGateway} from "../../gateways/user/userGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export  class CreateRelationUC {
    constructor(
        private verifyUserExistGateway: VerifyUserExistGateway,
        private createUserRelationGateway: CreateUserRelationGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }
    async execute(input: CreateRelationUCInput): Promise<CreateRelationUCOutput> {
        const requestedUser = await this.verifyUserExistGateway.verifyUserExist(input.requestedId)
        console.log(requestedUser)
        if(!requestedUser){
            throw new Error("Usuário não existe")
        }
        const requesterUser = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)

        await this.createUserRelationGateway.createUserRelation(requesterUser, input.requestedId)
        return {
            message: "Usuario adicionado como amigo"
        }
    }
}

export interface CreateRelationUCInput {
    token: string,
    requestedId:string,
}

export interface CreateRelationUCOutput {
    message: string
}
