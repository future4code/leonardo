import { CreateRecipeUC } from "./createRecipe"
import { UserGateway } from "../../gateways/user/userGateway"
import { RecipeGateway } from "../../gateways/recipe/recipeGateway"
import { Recipe } from "../../entities/Recipe"

describe('Test createRecipe useCase', () => {
    it('Should create a recipe', async () => {

        const userGateway: UserGateway = {
            createUser: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true)
        }

        const input = { description: 'teste description', title: 'teste title', userId: 'teste user id' }
        const recipeGateway: RecipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
        }
        const useCase = new CreateRecipeUC(
            userGateway, recipeGateway
        )

        const response = await useCase.execute(input)
        expect(response.userId).toBe('teste user id')
        expect(response.title).toBe('teste title')
    })

    it('Should throw a error if input is incomplete', async () => {

        const userGateway: UserGateway = {
            createUser: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(true)
        }

        const input = { description: '', title: '', userId: 'teste user id' }
        const recipeGateway: RecipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
        }
        const useCase = new CreateRecipeUC(
            userGateway, recipeGateway
        )

        await expect(useCase.execute(input)).rejects.toThrowError('Alguma informação da receita esta faltanto')
    })

    it('Should throw a error if user dont exist', async () => {

        const userGateway: UserGateway = {
            createUser: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserById: jest.fn(),
            updatePassword: jest.fn(),
            verifyUserExists: jest.fn().mockReturnValue(false)
        }

        const input = { description: 'teste descricao', title: 'teste title', userId: 'teste user id' }
        const recipeGateway: RecipeGateway = {
            createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
        }
        const useCase = new CreateRecipeUC(
            userGateway, recipeGateway
        )

        await expect(useCase.execute(input)).rejects.toThrowError('Não é possível criar uma receita sem um Usuário')
    })
})