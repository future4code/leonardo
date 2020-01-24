import express, { Request, Response, request } from 'express'
import { CreateUserUC, CreateUserUCInput } from "../business/usecases/user/createUser";
import { UserDataBase } from "../data/userDataBase";
import { UuidIdGenerator } from "../services/uuidIdGenerator";
import { BcryptImplamantation } from "../services/bcryptCryptography";
import { loginUC, loginUCInput } from '../business/usecases/auth/login';
import { JWTCryptography } from '../services/JWTCryptography';
import {CreateRelationUC, CreateRelationUCInput} from "../business/usecases/user/createRelation";
import {EraseRelationUC, EraseRelationUCInput} from "../business/usecases/user/eraseRelation";
import {CreatePostUC, CreatePostUCInput} from "../business/usecases/post/createPost";
import {PostDataBase} from "../data/postDataBase";
import {PostType} from "../business/entities/post";
import {GetFeedUC, GetFeedUCInput} from "../business/usecases/feed/getFeed";
import {FeedDataBase} from "../data/feedDataBase";
import {GetPaginatedFeedByTypeUC} from "../business/usecases/feed/getPaginatedFeedByType";

const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

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
            new JWTCryptography()
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
            new JWTCryptography()
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
            new JWTCryptography(),
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
            new UuidIdGenerator(),
            new JWTCryptography()
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
            new JWTCryptography()
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

app.post("/getPaginatedFeedByType", async (request: Request, response: Response) => {
    try {
        const getPaginatedFeedByTypeUC = new GetPaginatedFeedByTypeUC(
            new FeedDataBase(),
            new JWTCryptography()
        );
        const input = {
            type: request.body.type,
            page: request.body.page,
            token: getTokenFromHeaders(request.headers)
        };
        const result = await getPaginatedFeedByTypeUC.execute(input);
        response.status(200).send(result);
    } catch (err) {
        response.status(431).send({
            ...err,
            errorMessage: err.message
        });
    }
});

app.post("/getPaginatedFeed", async (request: Request, response: Response) => {
    try {
        const getPaginatedFeedByTypeUC = new GetPaginatedFeedByTypeUC(
            new FeedDataBase(),
            new JWTCryptography()
        );
        const input = {
            type: request.body.type,
            page: request.body.page,
            token: getTokenFromHeaders(request.headers)
        };
        const result = await getPaginatedFeedByTypeUC.execute(input);
        response.status(200).send(result);
    } catch (err) {
        response.status(431).send({
            ...err,
            errorMessage: err.message
        });
    }
});

export default app