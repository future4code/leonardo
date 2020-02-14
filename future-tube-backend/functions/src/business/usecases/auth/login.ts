import {GetUserByEmailGateway} from "../../gateways/user/userGateway";
import {CompareCryptographyGateway} from "../../gateways/cryptography/cryptographyGateway";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";
import {User} from "../../entities/user/user";

export class LoginUC {
    constructor(
        private userGateway: GetUserByEmailGateway,
        private cryptographyGateway: CompareCryptographyGateway,
        private authenticationGateway: GenerateTokenAuthenticationGateway,
    ) {
    }

    async execute(input: LoginUCInput): Promise<LoginUCOutput> {
        const user: User = await this.userGateway.getUserByEmail(input.email)
        const isPasswordRight: boolean = await this.cryptographyGateway.compare(
            input.password,
            user.getPassword()
        )
        if (!isPasswordRight) {
            throw new Error("Senha ou email invalidos")
        }
        const token = await this.authenticationGateway.generateToken(user.getId())
        return {
            token,
            photo: user.getPhoto()
        }
    }
}

export interface LoginUCInput {
    email: string,
    password: string
}

export interface LoginUCOutput {
    token: string,
    photo: string
}