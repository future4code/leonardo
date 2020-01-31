import {GetUserByEmailGateway, UpdateEmailCodeGateway} from "../../gateways/user/userGateway";
import {RandomStringGeneratorGateway} from "../../gateways/string/randamStringGenerator";
import {MailSenderGateway} from "../../gateways/email/mailSenderGateway";

export class SendResetPasswordEmailUC {
    private static EMAIL_CODE_LENGTH = 4
    private static EMAIL_SUBJECT = "Recuperação de senha do Astro Mactch"
    private static EMAIL_TEST = "leonardocpn@gmail.com"

    constructor(
        private getUserByEmailGateway: GetUserByEmailGateway,
        private randomStringGenerator: RandomStringGeneratorGateway,
        private mailSenderGateway: MailSenderGateway,
        private updateEmailCodeGateway: UpdateEmailCodeGateway
    ) {
    }
    
    async execute(input: SendResetPasswordEmailUCInput): Promise<SendResetPasswordEmailUCOutput> {
        const user = await this.getUserByEmailGateway.getUserByEmail(input.email)
        if(!user){
            throw new Error("Usuário não encontrado")
        }
        const emailCode = this.randomStringGenerator.generateRandomString(SendResetPasswordEmailUC.EMAIL_CODE_LENGTH)
        await this.updateEmailCodeGateway.updateEmailCode(user.getId(), emailCode)
        await this.mailSenderGateway.sendEmail(
            SendResetPasswordEmailUC.EMAIL_SUBJECT,
            `Estamos enviando o código de recuperação da senha:
            CODIGO: ${emailCode}`,
            SendResetPasswordEmailUC.EMAIL_TEST
        )
        return {
            message: `Email enviado com sucesso para ${user.getEmail()}`
        }
    }

}

export interface SendResetPasswordEmailUCInput {
    email: string
}

export interface SendResetPasswordEmailUCOutput {
    message: string
}