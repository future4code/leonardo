import {UploadVideoUC, UploadVideoUCInput} from "../business/usecases/video/uploadVideoUC";
import {VideoDataBase} from "../data/videoDataBase";
import {UuidIdGenerator} from "../services/uuidIdGenerator";
import {UserDataBase} from "../../src/data/userDataBase";
import {BcryptImplamantation} from "../../src/services/bcryptCryptography";
import {JWTCryptography} from "../../src/services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "../business/usecases/user/createUser";
import express, { Request, Response } from 'express'

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export default app;

app.post("/uploadVideo", async (req,res) => {
    try {
        const useCase = new UploadVideoUC(
            new VideoDataBase(),
            new UuidIdGenerator()
        )

        const input: UploadVideoUCInput = {
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId

        }

        const result = useCase.execute(input)
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.post('/createUser', async (request: Request , response: Response ) => {
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
