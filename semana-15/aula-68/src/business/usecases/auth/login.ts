import { UserGateway } from "../../gateways/user/userGateway";
import { CriptographyGateway } from "../../gateways/crypt/cryptographyGateway";
import { AuthenticationGateway } from "../../gateways/auth/authenticationGateway";

export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CriptographyGateway,
        private authenticationGateway:  AuthenticationGateway
    ){}

    async execute(input: LoginInput): Promise<LoginOutput>{
        const user = await this.userGateway.getUserByEmail(input.email)
        const isPasswordRight = await this. cryptographyGateway.compare(
            input.password,
            user.getPassword()
        )
        if(!isPasswordRight){
            throw new Error("Email ou senha inválida")
        }

        const token = this.authenticationGateway.generateToken(user.getId())
        return {
            token
        }
    }
}

export interface LoginOutput {
    token: string
}

export interface LoginInput {
    email: string,
    password: string
}