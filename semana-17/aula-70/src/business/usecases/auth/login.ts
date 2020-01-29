import {GetUserByEmailGateway} from "../../gateways/user/userGateway";
import {CompareCryptographyGateway} from "../../gateways/cryptography/cryptographyGateway";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";

export class LoginUC {
    constructor(
        private userGateway: GetUserByEmailGateway,
        private cryptographyGateway: CompareCryptographyGateway,
        private authenticationGateway: GenerateTokenAuthenticationGateway,
    ){}

    async execute(input: LoginUCInput): Promise<LoginUCOutput>{
        const user = await this.userGateway.getUserByEmail(input.email)
        const isPasswordRight = await this.cryptographyGateway.compare(
            input.password,
            user.getPassword()
        )
        if(!isPasswordRight){
            throw new Error ("Senha ou email invalidos")
        }
        const token = this.authenticationGateway.generateToken(user.getId())
        return {
            token
        }
    }
}

export interface LoginUCInput {
    email: string,
    password: string
}

export interface LoginUCOutput {
    token: string
}