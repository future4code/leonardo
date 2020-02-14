import {BaseDataBase} from "./baseDataBase";
import {
    DeleteVideoGateway, EditVideoInformationGateway, GetPaginatedAllVideosGateway,
    GetVideoFromAUserGateway, GetVideoInformationGateway,
    UploadVideoGateway,
    VerifyVideoExistGateway, VideoInformationResponse
} from "../business/gateways/video/videoGateway";
import {Video} from "../business/entities/video/video";
import {GetVideoFromAUserUCOutput} from "../business/usecases/video/getVideoFromAUserUC";
import {VideoAlteration} from "../business/usecases/video/editVideoInformationUC";

export class VideoDataBase extends BaseDataBase implements UploadVideoGateway,
    GetVideoFromAUserGateway,
    VerifyVideoExistGateway,
    DeleteVideoGateway,
    GetVideoInformationGateway,
    GetPaginatedAllVideosGateway,
    EditVideoInformationGateway {

    private static TABLE_VIDEOS: string = "Videos"
    private static TABLE_USERS: string = "Users"

    async uploadVideo(video: Video): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${VideoDataBase.TABLE_VIDEOS} 
        (id, url, title, description, userId)
        VALUES (
            "${video.getId()}",
            "${video.getUrl()}",
            "${video.getTitle()}",
            "${video.getDescription()}",
             "${video.getUserId()}")       
             `)
    }

    async getVideosFromAUser(userId: string): Promise<GetVideoFromAUserUCOutput> {
        const query = await this.connection.raw(`
            SELECT * FROM ${VideoDataBase.TABLE_VIDEOS} 
            WHERE userId="${userId}"; `)
        const videosFromDb: VideoFromDb[] = query[0]
        return {
            videos: videosFromDb.map(video => (
                new Video(
                    video.id,
                    video.url,
                    video.title,
                    video.description,
                    video.userId
                )
            ))
        }
    }

    async deleteVideo(videoId: string): Promise<void> {
        await this.connection.raw(`
         DELETE FROM ${VideoDataBase.TABLE_VIDEOS}  
         WHERE id="${videoId}"; `)
    }

    async verifyVideoExist(videoId: string): Promise<boolean> {
        const query = await this.connection.raw(`
         SELECT * FROM ${VideoDataBase.TABLE_VIDEOS} 
         WHERE id="${videoId}"; `)
        if (!query [0][0])
            return false
        return true
    }

    async getVideoInformation(videoId: string): Promise<VideoInformationResponse> {
        const query = await this.connection.raw(`
         SELECT v.id, v.url, v.title, v.description, u.name as userName, u.photo as userPhoto FROM ${VideoDataBase.TABLE_VIDEOS} v
         JOIN ${VideoDataBase.TABLE_USERS} u ON  v.userId=u.id
         WHERE v.id="${videoId}"; `)
        const videoFromDb: VideoFromDb = query[0][0]
        return {
            id: videoFromDb.id,
            title: videoFromDb.title,
            description: videoFromDb.description,
            url: videoFromDb.url,
            userName: videoFromDb.userName,
            userPhoto: videoFromDb.userPhoto
        }
    }

    async getPaginatedAllVideos(limit: number, offset: number): Promise<import("../business/usecases/video/getPaginatedAllVideosUC").GetPaginatedAllVideosUCOutput> {
        const query = await this.connection.raw(`
         SELECT id, title, url FROM ${VideoDataBase.TABLE_VIDEOS}
         LIMIT ${limit} OFFSET ${offset}; `)
        const videoFromDb: VideoFromDb[] = query[0]
        return {
            videos: videoFromDb.map(video => ({
                id: video.id,
                title: video.title,
                url: video.url
            }))
        }
    }

    async editVideoInformation(videoId: string, alteration: VideoAlteration): Promise<void> {
        await this.connection.raw(`
        UPDATE ${VideoDataBase.TABLE_VIDEOS} SET ${alteration.field}="${alteration.value}"
        WHERE id="${videoId}"`)
    }
}

export interface VideoFromDb {
    id: string
    url: string
    title: string
    description: string
    userId: string
    userName: string
    userPhoto: string
}