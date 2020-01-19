import express, { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { CreateUserUC, CreateUserInput } from '../business/usecases/user/createUserUC'
import { BcryptImplamantation } from '../service/crypt/bcryptImplemantation'
import { LoginUC, LoginInput } from '../business/usecases/auth/login'
import { JwtImplamantation } from '../service/jwt/jwtImplamantation'
import { GetLogedUserInformation } from '../business/usecases/auth/getLogedUserInformation'
import { ChangeUserPassword } from '../business/usecases/auth/changeUserPassword'
import { generateRandomId } from '../utils/generateRandomId'
import { CreateRecipeUC, CreateRecipeInput } from '../business/usecases/recipe/createRecipe'
import { RecipeDataBase } from '../data/RecipeDataBase'
import { FollowUserUC, FollowUserInput } from '../business/usecases/user/folowUser'
import {FeedDataBase} from "../data/FeedDataBase";
import {GetFeedInput, GetFeedUseCase} from "../business/usecases/feed/getFeed";
import {getAllUsersUC} from "../business/usecases/user/getAllUsers";

const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
}

function authenticate( request: Request) {
    const authService = new JwtImplamantation()
    return authService.getUserIdFromToken(getTokenFromHeaders(request.headers))
}

app.post('/create', async (request: Request, response: Response) => {
    try {
        const gateway = new UserDataBase()
        const idGenerator = new generateRandomId()
        const useCase = new CreateUserUC(gateway, new BcryptImplamantation(), idGenerator)

        const input: CreateUserInput = {
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
        const loginUC = new LoginUC(
            new UserDataBase(),
            new BcryptImplamantation(),
            new JwtImplamantation(),
        )
        const loginInput: LoginInput = {
            email: request.body.email,
            password: request.body.password
        }
        const result = await loginUC.execute(
            loginInput
        )
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post('/getInformationById', async (request: Request, response: Response) => {
    try {
        const getLogedUserInformationUC = new GetLogedUserInformation(
            new UserDataBase(),
            new JwtImplamantation()
        )
        const result = await getLogedUserInformationUC.execute(getTokenFromHeaders(request.headers))
        response.status(200).send(result)

    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post('/updatePassword', async (request: Request, response: Response) => {
    try {
        const changePasswordUC = new ChangeUserPassword(
            new UserDataBase(),
            new JwtImplamantation(),
            new BcryptImplamantation()
        )

        const result = await changePasswordUC.execute(
            {
                token: getTokenFromHeaders(request.headers),
                oldPassword: request.body.oldPassword,
                newPassword: request.body.newPassword
            }
        )
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post('/recipes', async (request: Request, response: Response) => {
    try {
        const userId = authenticate(request)
        const userGateway = new UserDataBase()
        const recipeGateway = new RecipeDataBase()
        const useCase = new CreateRecipeUC(userGateway, recipeGateway)

        const input: CreateRecipeInput = {
            description: request.body.description,
            title: request.body.title,
            userId: userId
        }

        const result = await useCase.execute(input)

        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post('/users/follow', async (request: Request, response: Response) => {
    try {
        const userId = authenticate(request)
        const userGateway = new UserDataBase()
        const useCase = new FollowUserUC(userGateway)

        const input: FollowUserInput = {
            followerId: userId,
            followedId: request.body.userToFollow
        }

        await useCase.execute(input)

        response.status(200).send({
            message: "Usuário seguido com sucesso!!"
        })
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.get('/feed', async (request: Request, response: Response) => {
    try {
        const userId = authenticate(request)
        const useCase = new GetFeedUseCase(
            new FeedDataBase()
        )

        const input: GetFeedInput = {
            userId
        }

        const result = await useCase.execute(input)

        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.get('/users', async (request: Request, response: Response) => {
    try {
        const useCase = new getAllUsersUC(
            new UserDataBase()
        )


        const result = await useCase.execute()

        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})



export default app