import {Post, PostType} from "../../entities/post";
import {IdGeneratorGateway} from "../../gateways/user/idGeneratorGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {CreatePostGateway} from "../../gateways/post/postGateway";

export class CreatePostUC {
    constructor(
        private createPostGateway: CreatePostGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway,
    ) {
    }
    async execute(input: CreatePostUCInput):Promise<CreatePostUcOutput> {
        const userId = await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        const newPost = new Post(
            this.idGeneratorGateway.generate(),
            input.photo,
            input.description,
            Post.convertPostType(input.type),
            userId
            )

        await this.createPostGateway.createPost(newPost)

        return {
            message: "Post criado com sucesso"
        }
    }
}

export interface CreatePostUCInput {
    photo: string,
    description: string,
    type: PostType,
    token: string
}

export interface CreatePostUcOutput {
    message: string
}