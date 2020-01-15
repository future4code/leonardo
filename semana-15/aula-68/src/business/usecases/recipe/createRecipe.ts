import { UserGateway } from "../../gateways/user/userGateway"
import { Recipe } from "../../entities/Recipe"
import { RecipeGateway } from "../../gateways/recipe/recipeGateway"

export class CreateRecipeUC {
    constructor(
        private userGateway: UserGateway,
        private recipeGateway: RecipeGateway
    ) { }

    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {
        this.validateRecipe(input)
        await this.verifyUserExists(input.userId)
        const createdRecipe = await this.createRecipe(input)

        return {
            title: createdRecipe.getTitle(),
            description: createdRecipe.getDescription(),
            userId: createdRecipe.getUserId(),
            createdDate: createdRecipe.getCreationDate()
        }
    }

    validateRecipe(recipe: CreateRecipeInput) {
        if (!recipe.title || !recipe.description || !recipe.userId) {
            throw new Error('Alguma informação da receita esta faltanto')
        }
    }

    async verifyUserExists(userId: string) {
        const userExist = await this.userGateway.verifyUserExists(userId)
        if (!userExist) {
            throw new Error('Não é possível criar uma receita sem um Usuário')
        }
    }

    async createRecipe(input: CreateRecipeInput) {
        const newRecipe = new Recipe(input.title, input.description, input.userId)
        return await this.recipeGateway.createRecipe(newRecipe)
    }
}

export interface CreateRecipeInput {
    title: string,
    description: string,
    userId: string
}

export interface CreateRecipeOutput {
    title: string,
    description: string,
    userId: string,
    createdDate: Date
}