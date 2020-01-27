import {GetFeedGateway} from "../../gateways/feed/feedGateway";
import {Post} from "../../entities/post";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetFeedUC {
    constructor(
        private getFeedGateway: GetFeedGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {
    }
    async execute(input :GetFeedUCInput): Promise<getFeedUCOutput>{
        const userId = this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        const responses = await this.getFeedGateway.getPostsFeedForUser(userId)
        
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
}

export interface GetFeedUCInput {
    token: string
}

export interface getFeedUCOutput {
    posts: Array<{
        id: string
        photo: string
        description: string
        type: string
        userName: string
        creationDate: string
    }>
}