import { FeedGateway } from "../../gateways/feed/feedGateway";

export class GetFeedUseCase {
    constructor(private feedGateway: FeedGateway) {}

    async execute(input: GetFeedInput): Promise<GetFeedOutput> {
        const responses = await this.feedGateway.getRecipesFeedForUser(input.userId)
        return {
            recipes: responses.map((response) => ({
                title: response.recipe.getTitle(),
                description: response.recipe.getDescription(),
                email: response.email
            }))
        }
    }
}

export interface GetFeedInput {
    userId: string
}

export interface GetFeedOutput {
    recipes: Array<{
        title: string
        description: string
        email:string
    }>
}