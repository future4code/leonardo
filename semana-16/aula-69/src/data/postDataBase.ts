import {CreatePostGateway} from "../business/gateways/post/postGateway";
import {Post} from "../business/entities/post";
import {BaseDataBase} from "./baseDataBase";

export class PostDataBase extends BaseDataBase implements CreatePostGateway{
    private static TABLE_USERS: string = "posts"

    async createPost(post: Post): Promise<void> {


        await this.connection.raw(`
        INSERT INTO ${PostDataBase.TABLE_USERS} 
        (id, photo, description, creation_date, type, userId)
        VALUES ("${post.getId()}",
            "${post.getPhoto()}",
            "${post.getDescription()}",
             "${this.getSQLDateFromTSDate(post.getCreationDate())}",
             "${post.getType()}",             
             "${post.getUserId()}")`);
    }

}