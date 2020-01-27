import express, {Request, Response} from 'express'
import {UserDataBase} from "../data/userDataBase";
import {UuidIdGenerator} from "../services/uuidIdGenerator";
import {BcryptImplamantation} from "../services/bcryptCryptography";
import {JWTCryptography} from "../services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "../business/usecases/user/createUser";


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/create', async (request: Request, response: Response) => {
    try {
        const gateway = new UserDataBase()
        const idGenerator = new UuidIdGenerator()
        const bcrypt = new BcryptImplamantation()
        const auth = new JWTCryptography()

        const useCase = new CreateUserUC(
            gateway, bcrypt, idGenerator, auth
        )

        const input: CreateUserUCInput = {
            name: request.body.name,
            email: request.body.email,
            birthday: request.body.birthday,
            photo: request.body.photo,
            password: request.body.password
        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

export default app