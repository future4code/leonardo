import { CreateUserUC, CreateUserInput } from "./createUserUC"
import { UserDataBase } from "../../../data/UserDataBase"
import { UserGateway } from "../../gateways/user/userGateway"
import { CriptographyGateway } from "../../gateways/crypt/cryptographyGateway"
import { IdGeneratorGateway } from "../../gateways/user/idGeneretorGateway"
import { User } from "../../entities/User"

describe("Test for createUser", () => {
    it("Should create a user", async () => {
        const input: CreateUserInput ={
            email: 'teste@email',
            password: '1234567890'
        }
        
        const userGateway: UserGateway = {
            createUser: jest.fn().mockReturnValue(new User('111111111',input.email,'1234567890' )),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn(),
            createUserRelation: jest.fn()

        }
        const cryptographyGateway: CriptographyGateway = {
            encrypt: jest.fn().mockReturnValue('1234567890'),
            compare: jest.fn()
        }

        const idGeneratorGateway: IdGeneratorGateway = {
            generate: jest.fn().mockReturnValue('111111111')
        }
           
        const useCase = new CreateUserUC(userGateway, cryptographyGateway, idGeneratorGateway)
        const response = await useCase.execute(input)
        
        expect(response).toEqual({message: "User created successfully"})
    })

    it("Should throw a error if password length is less than 6", async () => {
        const input: CreateUserInput ={
            email: 'teste@email',
            password: '1234'
        }
        
        const userGateway: UserGateway = {
            createUser: jest.fn().mockReturnValue(new User('111111111',input.email,'1234567890' )),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn(),
            createUserRelation: jest.fn()

        }
        const cryptographyGateway: CriptographyGateway = {
            encrypt: jest.fn().mockReturnValue('1234'),
            compare: jest.fn()
        }

        const idGeneratorGateway: IdGeneratorGateway = {
            generate: jest.fn().mockReturnValue('111111111')
        }
           
        const useCase = new CreateUserUC(userGateway, cryptographyGateway, idGeneratorGateway)
        
        expect(useCase.execute(input)).rejects.toThrowError("Senha muito curta, deve contar mais que 6 caracteres")
    })
})