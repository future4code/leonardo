import express, { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { CreateUserUC, CreateUserInput } from '../business/usecases/createUserUC'
import { BcryptImplamantation } from '../service/crypt/bcryptImplemantation'
import { LoginUC, LoginInput } from '../business/usecases/auth/login'
import { JwtImplamantation } from '../service/jwt/jwtImplamantation'
import { GetLogedUserInformation } from '../business/usecases/getLogedUserInformation'
import { ChangeUserPassword } from '../business/usecases/auth/changeUserPassword'
import { generateRandomId } from '../utils/generateRandomId'
import { CreateRecipeUC, CreateRecipeInput } from '../business/usecases/recipe/createRecipe'
import { RecipeDataBase } from '../data/RecipeDataBase'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
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
        const authService = new JwtImplamantation()
        const userId = authService.getUserIdFromToken(getTokenFromHeaders(request.headers))
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



export default app