import express, { Request, Response, request } from 'express'
import { CreateUserUC, CreateUserUCInput } from "../business/usecases/user/createUser";
import { UserDataBase } from "../data/userDataBase";
import { UuidImplementation } from "../services/uuidImplementation";
import { BcryptImplamantation } from "../services/bcryptImplementation";
import { loginUC, loginUCInput } from '../business/usecases/auth/login';
import { JWTImplementation } from '../services/JWTImplementation';
import {CreateRelationUC, CreateRelationUCInput} from "../business/usecases/user/createRelation";
import {EraseRelationUC, EraseRelationUCInput} from "../business/usecases/user/eraseRelation";
import {CreatePostUC, CreatePostUCInput} from "../business/usecases/post/createPost";
import {PostDataBase} from "../data/postDataBase";
import {PostType} from "../business/entities/post";

const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post('/create', async (request: Request, response: Response) => {
    try {
        const gateway = new UserDataBase()
        const idGenerator = new UuidImplementation()
        const bcrypt = new BcryptImplamantation()
        const auth = new JWTImplementation()

        const useCase = new CreateUserUC(
            gateway, bcrypt, idGenerator, auth
        )

        const input: CreateUserUCInput = {
            name: request.body.name,
            email: request.body.email,
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

app.post('/login', async (request: Request, response: Response) => {
    try {
        const useCase = new loginUC(
            new UserDataBase(),
            new BcryptImplamantation(),
            new JWTImplementation()
        )

        const input: loginUCInput = {
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

app.post('/requestFriendship', async (request: Request, response: Response) => {
    try {
        const useCase = new CreateRelationUC(
            new UserDataBase(),
            new UserDataBase(),
            new JWTImplementation()

        )

        const input: CreateRelationUCInput = {
            token: request.body.token,
            requestedId: request.body.requestedId
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

app.delete('/deleteFriendship', async (request: Request, response: Response) => {
    try {
        const useCase = new EraseRelationUC(
            new UserDataBase(),
            new JWTImplementation(),
            new UserDataBase()

        )

        const input: EraseRelationUCInput = {
            token: request.body.token,
            userIdToEraseRelation: request.body.requestedId
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

app.post('/post', async (request: Request, response: Response) => {
    try {

        const useCase = new CreatePostUC(
            new PostDataBase(),
            new UuidImplementation(),
            new JWTImplementation()
        )


        const input: CreatePostUCInput = {
            photo: request.body.photo,
            description: request.body.description,
            type: request.body.type,
            token: getTokenFromHeaders(request.headers)
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