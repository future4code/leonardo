import  { User } from '../entities/User'
import {generateRandomId} from '../../utils/generateRandomId'
import { UserGateway } from '../gateways/UserGateway'

export class CreateUserUC {
    constructor (
        private userGateway: UserGateway
    ){
    }

    async execute(createUserInput: CreateUserInput): Promise<CreateUserOutput>{
        const user = new User(generateRandomId(), createUserInput.email, createUserInput.password)

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