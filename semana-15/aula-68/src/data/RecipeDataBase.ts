import { RecipeGateway } from "../business/gateways/recipe/recipeGateway";
import knex from 'knex'
import { Recipe } from "../business/entities/Recipe";

export class RecipeDataBase implements RecipeGateway {
    private connection: knex

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'leonardo',
                password: process.env.SENHA_BANCO,
                database: 'leonardo'
            }
        })
    }

    async createRecipe(recipe: Recipe): Promise<Recipe> {
        await this.connection.raw(`
        INSERT INTO recipes
        (title, description, userId)
        VALUES("${recipe.getTitle()}", "${recipe.getDescription()}", "${recipe.getUserId()}");`)
        return recipe
    }
}