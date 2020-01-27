import { RecipeGateway } from "../business/gateways/recipe/recipeGateway";
import { Recipe } from "../business/entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase implements RecipeGateway {
    
    async createRecipe(recipe: Recipe): Promise<Recipe> {
        await this.connection.raw(`
        INSERT INTO recipes
        (title, description, userId, creation_date)
        VALUES("${recipe.getTitle()}", "${recipe.getDescription()}", "${recipe.getUserId()}","${this.getSQLDatefromTSDate(recipe.getCreationDate())}");
        `)
        return recipe
    }

    
}