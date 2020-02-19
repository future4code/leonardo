import {Video} from "../../entities/video/video";
import {GetVideoFromAUserUCOutput} from "../../usecases/video/getVideoFromAUserUC";
import {GetPaginatedAllVideosUCOutput} from "../../usecases/video/getPaginatedAllVideosUC";

export interface UploadVideoGateway {
    uploadVideo(video: Video): Promise<void>
}

export interface GetVideoFromAUserGateway {
    getVideosFromAUser(userId: string): Promise<GetVideoFromAUserUCOutput>
}

export interface VerifyVideoExistGateway {
    verifyVideoExist(videoId: string): Promise<boolean>
}

export interface DeleteVideoGateway {
    deleteVideo(videoId: string): Promise<void>
}

export interface GetPaginatedAllVideosGateway {
    getPaginatedAllVideos(limit: number, offset: number): Promise<GetPaginatedAllVideosUCOutput>
}

export interface GetVideoInformationGateway {
    getVideoInformation(videoId: string): Promise<VideoInformationResponse>
}

export interface VideoInformationResponse {
    id: string
    title: string
    description: string
    url: string
    userName: string
    userPhoto: string
}

export interface EditVideoInformationGateway {
    editVideoInformation(videoId: string, alteration: { value: string; field: string }): Promise<void>
}