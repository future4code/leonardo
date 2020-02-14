import {BaseDataBase} from "./baseDataBase";
import {UploadVideoGateway} from "../business/gateways/video/videoGateway";
import {Video} from "../business/entities/video/video";

export class VideoDataBase extends BaseDataBase implements UploadVideoGateway {
    private static TABLE_USERS: string = "Videos"

    async uploadVideo(video: Video): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${VideoDataBase.TABLE_USERS} 
        (id, url, title, description, userId)
        VALUES (
            "${video.getId()}",
            "${video.getUrl()}",
            "${video.getTitle()}",
            "${video.getDescription()}",
             "${video.getUserId()}")       
             `)
    }


}