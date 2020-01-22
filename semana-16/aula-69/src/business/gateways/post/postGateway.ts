import {Post} from "../../entities/post";

export interface CreatePostGateway {
    createPost(post: Post): Promise<void>
}