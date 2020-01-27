import { FeedGateway, FeedResponse } from "../business/gateways/feed/feedGateway";
import { BaseDataBase } from "./BaseDataBase";
import { Recipe } from "../business/entities/Recipe";

export class FeedDataBase extends BaseDataBase implements FeedGateway {
    async getRecipesFeedForUser(userId: string) {
        const result = await this.connection.raw(`
        SELECT r.id, r.title, r.description, r.creation_date, u.email from users_relations rel
        JOIN recipes r on rel.followed_id=r.userId
        JOIN users u on rel.followed_id=u.id
        WHERE follower_id="${userId}";`)
        const recipesFromDb: RecipeFeedModel[] = result[0]
        console.log(result[0])
        return recipesFromDb.map(recipe => 
            ({
                recipe: new Recipe(recipe.title, recipe.description, recipe.userId, new Date(recipe.creation_date)),
                email: recipe.email
            })
        )
    }
}

export interface RecipeFeedModel {
    id: string,
    title: string,
    description: string,
    userId: string,
    creation_date: string,
    email: string

}