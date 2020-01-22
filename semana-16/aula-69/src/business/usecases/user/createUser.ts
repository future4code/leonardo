import { CreateUserGateway } from "../../gateways/user/userGateway";
import { IdGeneratorGateway } from "../../gateways/user/idGeneratorGateway";
import { EncryptCryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";
import { User } from "../../entities/user";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";

export class CreateUserUC {
    constructor(
        private userGateway: CreateUserGateway,
        private cryptographyGateway: EncryptCryptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private authenticationGateway: GenerateTokenAuthenticationGateway,
    ) {}

    async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(input.password)
        const userId = this.idGeneratorGateway.generate()
        const user = new User(userId, input.name, input.email, encryptedPassword)
        try {
            await this.userGateway.createUser(user)
            const token = this.authenticationGateway.generateToken(userId)
            return {
                token
            }
        } catch (e) {
            return e.message
        }
    }
}

export interface CreateUserUCInput {
    name: string,
    email: string,
    password: string
}

export interface CreateUserUCOutput {
    token: string
}

