import { CreateUserGateway } from "../../gateways/user/userGateway";
import { IdGeneratorGateway } from "../../gateways/user/idGeneratorGateway";
import { EncryptCryptographyGateway } from "../../gateways/cryptography/cryptographyGateway";
import { User } from "../../entities/user/user";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";

export class CreateUserUC {
    constructor(
        private userGateway: CreateUserGateway,
        private cryptographyGateway: EncryptCryptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private authenticationGateway: GenerateTokenAuthenticationGateway,
    ) {}

    async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput>{
        this.validadeUserInput(input)
        const encryptedPassword = await this.cryptographyGateway.encrypt(input.password)
        const userId = this.idGeneratorGateway.generate()
        const newUser = new User(
            userId,
            input.name,
            new Date(input.birthday),
            input.email,
            input.photo,
            encryptedPassword)

        try {
            await this.userGateway.createUser(newUser)
            const token = this.authenticationGateway.generateToken(userId)
            return {
                token
            }
        }catch (error){
            return error.message
        }
    }

    validadeUserInput(input: CreateUserUCInput){
        if(!input.name || !input.email || !input.birthday || !input.photo || !input.password){
            throw new Error("Dados do usuário faltando")
        }
    }
}

export interface CreateUserUCInput {
    name: string,
    email: string,
    birthday: string,
    photo: string,
    password: string
}

export interface CreateUserUCOutput {
    token: string
}