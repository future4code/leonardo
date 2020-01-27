import {Post} from "../../entities/post";

export interface GetFeedGateway {
    getPostsFeedForUser(userId: string): Promise<FeedResponse[]>
}

export interface FeedResponse {
    post: Post
    userName: string
}

export interface GetPaginatedFeedByTypeGateway {
    getPaginatedFeedByType(
        type: string,
        limit: number,
        offset: number,
        userId: string
    ): Promise<FeedResponse[]>
}

export interface GetPaginatedFeedGateway {
    getPaginatedFeed(
        limit: number,
        offset: number,
        userId: string
    ): Promise<FeedResponse[]>
}