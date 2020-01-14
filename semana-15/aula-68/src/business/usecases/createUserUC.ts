import  { User } from '../entities/User'
import {generateRandomId} from '../../utils/generateRandomId'
import { UserGateway } from '../gateways/UserGateway'
import { CriptographyGateway } from '../gateways/crypt/cryptographyGateway'

export class CreateUserUC {
    constructor (
        private userGateway: UserGateway,
        private cryptographyGateway : CriptographyGateway
    ){
    }

    async execute(createUserInput: CreateUserInput): Promise<CreateUserOutput>{
        const encryptedPassword = await this.cryptographyGateway.encrypt(createUserInput.password)
        const user = new User(generateRandomId(), createUserInput.email, encryptedPassword)

        await this.userGateway.createUser(user)

        return {
            message: 'User created successfully'
        }
    }
}

export interface CreateUserInput{
    email: string,
    password: string
}

export interface CreateUserOutput {
    message: string
}