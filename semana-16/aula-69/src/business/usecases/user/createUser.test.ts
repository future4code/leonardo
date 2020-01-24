import {CreateUserGateway} from "../../gateways/user/userGateway";
import {User} from "../../entities/user";
import {EncryptCryptographyGateway} from "../../gateways/cryptography/cryptographyGateway";
import {IdGeneratorGateway} from "../../gateways/user/idGeneratorGateway";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";
import {CreateUserUC} from "./createUser";

describe("Test for CreateUser", () =>{
    it("Should create a User", async ()=>{
        const input = {
            name: "leo",
            email:"leo@test.com",
            password:"123"
        }

        const cryptographyGateway: EncryptCryptographyGateway ={
            encrypt: jest.fn().mockReturnValue("12345678")
        }

        const idGeneratorGateway: IdGeneratorGateway ={
            generate: jest.fn().mockReturnValue("id")
        }

        const authenticationGateway: GenerateTokenAuthenticationGateway = {
            generateToken: jest.fn().mockReturnValue("token123")
        }

        const createUserGateway: CreateUserGateway = {
            createUser: jest.fn().mockReturnValue(new User("id", input.name, input.email, "12345678"))
        }

        const useCase = new CreateUserUC(createUserGateway, cryptographyGateway, idGeneratorGateway, authenticationGateway)

        const result = await useCase.execute(input)
        expect(result).toEqual({token: "token123"})

    })

    it("Should throw a error if user name,email or password is missing", async () =>{
        const input = {
            name: "",
            email:"leo@test.com",
            password:"123"
        }

        const cryptographyGateway: EncryptCryptographyGateway ={
            encrypt: jest.fn().mockReturnValue("12345678")
        }

        const idGeneratorGateway: IdGeneratorGateway ={
            generate: jest.fn().mockReturnValue("id")
        }

        const authenticationGateway: GenerateTokenAuthenticationGateway = {
            generateToken: jest.fn().mockReturnValue("token123")
        }

        const createUserGateway: CreateUserGateway = {
            createUser: jest.fn().mockReturnValue(new User("id", input.name, input.email, "12345678"))
        }

        const useCase = new CreateUserUC(createUserGateway, cryptographyGateway, idGeneratorGateway, authenticationGateway)

        await expect(useCase.execute(input)).rejects.toThrowError("Dados do usuário faltando")
    })
})