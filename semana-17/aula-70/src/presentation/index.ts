import express, {Request, Response} from 'express'
import {UserDataBase} from "../data/userDataBase";
import {UuidIdGenerator} from "../services/uuidIdGenerator";
import {BcryptImplamantation} from "../services/bcryptCryptography";
import {JWTCryptography} from "../services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "../business/usecases/user/createUser";
import {LoginUC, LoginUCInput} from "../business/usecases/auth/login";
import {GetAllUsersUC, GetAllUsersUCInput} from "../business/usecases/user/getAllUsers";


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post('/login', async (request: Request, response: Response) => {
    try {
        const useCase = new LoginUC(
            new UserDataBase(),
            new BcryptImplamantation(),
            new JWTCryptography()
        )

        const input: LoginUCInput = {
            email: request.body.email,
            password: request.body.password
        }

        const result = await useCase.execute(input)

        response.status(200).send(result)
    }
    catch (error) {
        response.status(400).send({
            message: error.message
        })
    }
})

app.get('/getAllUsers', async (request: Request, response: Response) => {
    try {
        const useCase = new GetAllUsersUC(
            new UserDataBase(),
            new JWTCryptography(),

        )

        const input: GetAllUsersUCInput = {
            token: getTokenFromHeaders(request.headers)
        }

        const result = await useCase.execute(input)

        response.status(200).send(result)
    }
    catch (error) {
        response.status(400).send({
            message: error.message
        })
    }
})



export default app