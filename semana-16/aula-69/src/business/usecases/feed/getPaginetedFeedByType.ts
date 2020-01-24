import {GetPaginetedFeedByTypeGateway} from "../../gateways/feed/feedGateway";
import {Post} from "../../entities/post";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetPaginetedFeedByTypeUC {
    private static FEED_BY_PAGE: number = 10
    constructor(
        private getPaginetedFeedByTypeGateway: GetPaginetedFeedByTypeGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {
    }
    async execute(input: GetPaginetedFeedByTypeUCInput): Promise<getPaginetedFeedByTypeUCOutput>{
        const postType = Post.convertPostType(input.type)
        const userId = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        this.validatePage(input)
        const responses = await this.getPaginetedFeedByTypeGateway.getPaginetedFeedByType(
            postType,
            GetPaginetedFeedByTypeUC.FEED_BY_PAGE,
            0,
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

    validatePage(input: GetPaginetedFeedByTypeUCInput): void{
        if( input.page <= 0 ){
            input.page = 1
        } else if (input.page === NaN){
            input.page = 1
        }
    }
}



export interface GetPaginetedFeedByTypeUCInput {
    type: string
    page: number
    token: string
}

export interface getPaginetedFeedByTypeUCOutput {
    posts: Array<{
        id: string
        photo: string
        description: string
        type: string
        userName: string
        creationDate: string
    }>
}
