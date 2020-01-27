import { UserGateway } from "../../gateways/user/userGateway";
import { AuthenticationGateway } from "../../gateways/auth/authenticationGateway";
import { CriptographyGateway } from "../../gateways/crypt/cryptographyGateway";

export class ChangeUserPassword {
    constructor(
        private userGateway: UserGateway,
        private authenticationGateway: AuthenticationGateway,
        private cryptographyGateway: CriptographyGateway
    ) {}
    async execute(input: ChangeUserPasswordInput): Promise<ChangeUserPasswordOutput> {
        const userId = this.authenticationGateway.getUserIdFromToken(input.token)
        const user = await this.userGateway.getUserById(userId)
        const isOldPasswordRight = await this.cryptographyGateway.compare(
            input.oldPassword,
            user.getPassword())
        console.log(user)
        if (!isOldPasswordRight) {
            throw new Error('Senha antiga esta incorreta')
        }
        const encryptedNewPassword = await this.cryptographyGateway.encrypt(input.newPassword)

        await this.userGateway.updatePassword(user.getId(), encryptedNewPassword)
        const newToken = this.authenticationGateway.generateToken(userId)
        return {
            token: newToken
        }
    }
}

export interface ChangeUserPasswordInput {
    token: string
    oldPassword: string
    newPassword: string
}

export interface ChangeUserPasswordOutput {
    token: string
}