import {GetUserByEmailGateway, UpdateEmailCodeGateway, UpdatePasswordGateway} from "../../gateways/user/userGateway";
import {EncryptCryptographyGateway} from "../../gateways/cryptography/cryptographyGateway";

export class ResetPasswordUC {
    constructor(
        private getUserByEmailGateway: GetUserByEmailGateway,
        private encryptCryptographyGateway: EncryptCryptographyGateway,
        private updatePasswordGateway: UpdatePasswordGateway,
        private updateEmailCodeGateway: UpdateEmailCodeGateway,
    ) {
    }
    
    async execute(input :ResetPasswordUCInput): Promise<ResetPasswordUCOutput> {
        const user = await this.getUserByEmailGateway.getUserByEmail(input.email)
        if(!user){
            throw new Error("Usuário não encontrado")
        }
        if(user.getEmailCode() !== input.emailCode){
            throw new Error("Código de e-mail inválido")
        }
        const encryptedPassword = await this.encryptCryptographyGateway.encrypt(input.newPassword)

        await this.updatePasswordGateway.updatePassword(user.getId(), encryptedPassword)
        await this.updateEmailCodeGateway.updateEmailCode(user.getId(), "")

        return {
            message: "Senha atualizada com sucesso"
        }
    }
}

export interface ResetPasswordUCInput {
    emailCode: string,
    email: string,
    newPassword: string
}

export interface ResetPasswordUCOutput {
    message: string
}