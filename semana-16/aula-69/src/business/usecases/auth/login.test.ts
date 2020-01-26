import {GetUserByEmailGateway} from "../../gateways/user/userGateway";
import {CompareCryptographyGateway} from "../../gateways/cryptography/cryptographyGateway";
import {GenerateTokenAuthenticationGateway} from "../../gateways/auth/autenticationGateway";
import {User} from "../../entities/user";
import {loginUC} from "./login";


describe("Test for login use case",  ()=>{
    it("Should do a login with correct password and email", async () =>{
        const getUserByEmailGateway: GetUserByEmailGateway = {
            getUserByEmail: jest.fn().mockReturnValue(new User("123", "leonardo", "leo@leo.com", "123456"))
        }

        const compareCryptographyGateway: CompareCryptographyGateway = {
            compare: jest.fn().mockReturnValue(true)
        }

        const generateTokenAuthenticationGateway : GenerateTokenAuthenticationGateway ={
            generateToken: jest.fn().mockReturnValue("token")
        }

        const input = {
            email: "leo@leo.com",
            password:"123"
        }

        const output = {
            token: "token"
        }
        const useCase = new loginUC(getUserByEmailGateway, compareCryptographyGateway, generateTokenAuthenticationGateway)
        const result = await useCase.execute(input)

        expect(result).toEqual(output)


    })
})