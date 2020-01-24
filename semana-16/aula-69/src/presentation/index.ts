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
import {GetFeedUC, GetFeedUCInput} from "../business/usecases/feed/getFeed";
import {FeedDataBase} from "../data/feedDataBase";
import {GetPaginetedFeedByTypeUC} from "../business/usecases/feed/getPaginetedFeedByType";

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
            token: getTokenFromHeaders(request.headers),
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
            token: getTokenFromHeaders(request.headers),
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
            token: getTokenFromHeaders(request.headers),
            date: request.body.date
        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.get('/getFeedforUser', async (request: Request, response: Response) => {
    try {

        const useCase = new GetFeedUC(
            new FeedDataBase(),
            new JWTImplementation()
        )


        const input: GetFeedUCInput = {
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

app.post("/getPaginatedUsers", async (request: Request, response: Response) => {
    try {
        const getPaginetedFeedByTypeUC = new GetPaginetedFeedByTypeUC(
            new FeedDataBase(),
            new JWTImplementation()

        );
        const input = {
            type: request.body.type,
            page: request.body.page,
            token: getTokenFromHeaders(request.headers)
        };
        const result = await getPaginetedFeedByTypeUC.execute(input);
        response.status(200).send(result);
    } catch (err) {
        response.status(431).send({
            ...err,
            errorMessage: err.message
        });
    }
});


export default app