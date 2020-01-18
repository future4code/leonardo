import { Recipe } from "../../entities/Recipe";

export interface FeedGateway {
    getRecipesFeedForUser(userId: string) :Promise<FeedResponse[]>
}

export interface FeedResponse {
        recipe: Recipe
        email: string
}