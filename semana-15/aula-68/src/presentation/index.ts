import express, { Request, Response } from 'express'
import { UserDataBase } from '../data/UserDataBase'
import { CreateUserUC, CreateUserInput } from '../business/usecases/createUserUC'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/create', async (request: Request, response: Response) => {
    console.log(request.body)
    const gateway = new UserDataBase()
    const useCase = new CreateUserUC(gateway)

    const input: CreateUserInput = {
        email: request.body.email,
        password: request.body.password
    }
    
    const result = await useCase.execute(input)

    response.send({
        message: 'User created succesfully'
    })
})




export default app