import {UploadVideoUC, UploadVideoUCInput} from "../business/usecases/video/uploadVideoUC";
import {VideoDataBase} from "../data/videoDataBase";
import {UuidIdGenerator} from "../services/uuidIdGenerator";
import {UserDataBase} from "../data/userDataBase";
import {BcryptImplamantation} from "../services/bcryptCryptography";
import {JWTCryptography} from "../services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "../business/usecases/user/createUser";
import express, { Request, Response } from 'express'
import {GetAllUsersUC, GetAllUsersUCInput} from "../business/usecases/user/getAllUsers";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export default app;
const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/uploadVideo", async (req,res) => {
    try {
        const useCase = new UploadVideoUC(
            new VideoDataBase(),
            new UuidIdGenerator(),
            new JWTCryptography()
        )

        const input: UploadVideoUCInput = {
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            token: req.body.userId

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
        );

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

app.post("/getAllUsers", async (request , response ) => {
    console.log("foi na presentarion")
    try {
        const useCase = new GetAllUsersUC(
            new UserDataBase(),
            new JWTCryptography(),
        )
        const input: GetAllUsersUCInput = {
            token: getTokenFromHeaders(request.headers)
        }
        const result =  useCase.execute(input)
        console.log("result presentarion", result)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})
