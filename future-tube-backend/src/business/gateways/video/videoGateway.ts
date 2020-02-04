import {Video} from "../../entities/video/video";
import {GetPaginatedAllVideosUCOutput} from "../../usecases/video/getPaginatedAllVideosUC";
import {GetVideoForAUserUCOutput} from "../../usecases/video/getVideoFromAUserUC";

export interface UploadVideoGateway {
    uploadVideo(video: Video): Promise<void>
}

export interface GetVideoFromAUserGateway {
    getVideosForAUser(userId: string): Promise<GetVideoForAUserUCOutput>
}

export interface VerifyVideoExistGateway {
    verifyVideoExist(videoId: string): Promise<boolean>
}

export interface DeleteVideoGateway {
    deleteVideo(videoId: string): Promise<void>
}

export interface GetPaginatedAllVideosGateway {
    getPaginatedAllVideos(page: number, offset: number): Promise<GetPaginatedAllVideosUCOutput>
}

export interface GetVideoInformationGateway {
    getVideoInformation(videoId: string): Promise<Video>
}