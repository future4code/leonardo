import {BaseDataBase} from "./baseDataBase";
import {FeedResponse, GetPaginetedFeedByTypeGateway} from "../business/gateways/feed/feedGateway";
import {Post} from "../business/entities/post";
import {GetFeedGateway} from "../business/gateways/feed/feedGateway";

interface PostFeedModel {
    id: string
    photo: string
    description: string
    type: string
    userId:string
    userName: string
    creationDate: string

}

export class FeedDataBase extends BaseDataBase implements
    GetFeedGateway,
    GetPaginetedFeedByTypeGateway{
    async getPostsFeedForUser(userId: string): Promise<FeedResponse[]>  {
        const query = await this.connection.raw(`
        SELECT p.id, p.photo, p.description, p.type, p.creation_date, p.userId, u.name as userName FROM users_relations_future_book rel
        JOIN posts p ON rel.requested_id=p.userId
        JOIN users_future u ON rel.requested_id=u.id
        WHERE requester_id="${userId}" ORDER BY p.creation_date ASC;`)

    const postsFromDb: PostFeedModel[] = query[0]
console.log(postsFromDb)
    return postsFromDb.map(post => ({
        post: new Post(post.id, post.photo, post.description, Post.convertPostType(post.type), post.userId, new Date(post.creationDate)),
    userName: post.userName}))
    }

    async getPaginetedFeedByType(
        type: string,
        limit: number,
        offset: number,
        userId: string): Promise<FeedResponse[]> {
        const query = await this.connection.raw(`
        SELECT p.id, p.photo, p.description, p.type, p.creation_date, p.userId, u.name as userName FROM users_relations_future_book rel
        JOIN posts p ON rel.requested_id=p.userId
        JOIN users_future u ON rel.requested_id=u.id
        WHERE requester_id="${userId}"  AND p.type="${type}"
        ORDER BY p.creation_date ASC
        LIMIT ${limit} OFFSET ${offset}
        ;`)

        const postsFromDb: PostFeedModel[] = query[0]
        console.log(postsFromDb)
        return postsFromDb.map(post => ({
            post: new Post(
                post.id,
                post.photo,
                post.description,
                Post.convertPostType(post.type),
                post.userId,
                new Date(post.creationDate)),
            userName: post.userName}))
    }

}