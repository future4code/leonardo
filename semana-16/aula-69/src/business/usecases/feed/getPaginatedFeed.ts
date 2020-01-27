import {GetPaginatedFeedGateway} from "../../gateways/feed/feedGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {Post} from "../../entities/post";

export class GetPaginatedFeedUC {
    private static FEED_BY_PAGE: number = 10
    constructor(
        private getPaginatedFeedGateway: GetPaginatedFeedGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {
    }

    async execute(input: GetPaginatedFeedUCInput): Promise<getPaginatedFeedUCOutput>{
        const userId = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        this.validatePage(input)
        const offset = GetPaginatedFeedUC.FEED_BY_PAGE * (input.page - 1);
        const responses = await this.getPaginatedFeedGateway.getPaginatedFeed(
            GetPaginatedFeedUC.FEED_BY_PAGE,
            offset,
            userId
        )

        return {
            posts: responses.map((response) => ({
                id: response.post.getId(),
                photo: response.post.getPhoto(),
                description: response.post.getDescription(),
                type: Post.convertPostType(response.post.getType()),
                userName: response.userName,
                creationDate: response.post.getCreationDate().toISOString().split('T')[0]
            }))
        }
    }

    validatePage(input: GetPaginatedFeedUCInput): void{
        if( input.page <= 0 ){
            input.page = 1
        } else if (input.page === NaN){
            input.page = 1
        }
    }
}

export interface GetPaginatedFeedUCInput {
    page: number
    token: string
}

export interface getPaginatedFeedUCOutput {
    posts: Array<{
        id: string
        photo: string
        description: string
        type: string
        userName: string
        creationDate: string
    }>
}

