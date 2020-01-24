import {GetPaginatedFeedByTypeGateway} from "../../gateways/feed/feedGateway";
import {Post} from "../../entities/post";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetPaginatedFeedByTypeUC {
    private static FEED_BY_PAGE: number = 10
    constructor(
        private getPaginetedFeedByTypeGateway: GetPaginatedFeedByTypeGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {}

    async execute(input: GetPaginatedFeedByTypeUCInput): Promise<GetPaginatedFeedByTypeUCOutput>{

        const postType = Post.convertPostType(input.type)
        const userId = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        this.validatePage(input)
        const offset = GetPaginatedFeedByTypeUC.FEED_BY_PAGE * (input.page - 1);
        const responses = await this.getPaginetedFeedByTypeGateway.getPaginatedFeedByType(
            postType,
            GetPaginatedFeedByTypeUC.FEED_BY_PAGE,
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

    validatePage(input: GetPaginatedFeedByTypeUCInput): void{
        if( input.page <= 0 ){
            input.page = 1
        } else if (input.page === NaN){
            input.page = 1
        }
    }
}

export interface GetPaginatedFeedByTypeUCInput {
    type: string
    page: number
    token: string
}

export interface GetPaginatedFeedByTypeUCOutput {
    posts: Array<{
        id: string
        photo: string
        description: string
        type: string
        userName: string
        creationDate: string
    }>
}
