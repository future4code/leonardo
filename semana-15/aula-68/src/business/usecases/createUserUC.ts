import { User } from '../entities/User'
import { UserGateway } from '../gateways/user/userGateway'
import { CriptographyGateway } from '../gateways/crypt/cryptographyGateway'
import { IdGeneratorGateway } from '../gateways/user/idGeneretorGateway'

export class CreateUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CriptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway
    ) { }

    async execute(createUserInput: CreateUserInput): Promise<CreateUserOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(createUserInput.password)
        const user = new User(this.idGeneratorGateway.generate(), createUserInput.email, encryptedPassword)

        await this.userGateway.createUser(user)

        return {
            message: 'User created successfully'
        }
    }
}

export interface CreateUserInput {
    email: string,
    password: string
}

export interface CreateUserOutput {
    message: string
}