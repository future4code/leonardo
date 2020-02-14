import {GetPaginatedAllVideosGateway} from "../../gateways/video/videoGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";

export class GetPaginatedAllVideosUC {
    private static FEED_BY_PAGE: number = 10;

    constructor(
        private getPaginatedAllVideosGateway: GetPaginatedAllVideosGateway,
        private getUserIdFromTokenGateway: GetUserIdFromTokenGateway
    ) {
    }

    async execute(
        input: GetPaginatedAllVideosUCInput
    ): Promise<GetPaginatedAllVideosUCOutput> {
        await this.getUserIdFromTokenGateway.getUserIdFromToken(input.token)
        this.validatePage(input);
        const offset = GetPaginatedAllVideosUC.FEED_BY_PAGE * (input.page - 1);

        return await this.getPaginatedAllVideosGateway.getPaginatedAllVideos(
            GetPaginatedAllVideosUC.FEED_BY_PAGE,
            offset
        );
    }

    validatePage(input: GetPaginatedAllVideosUCInput): void {
        if (input.page <= 0) {
            input.page = 1;
        } else if (input.page === NaN) {
            input.page = 1;
        }
    }
}

export interface GetPaginatedAllVideosUCInput {
    token: string;
    page: number;
}

export interface GetPaginatedAllVideosUCOutput {
    videos: VideoForGetAllVideosUCOutput[];
}

export interface VideoForGetAllVideosUCOutput {
    id: string;
    title: string;
    url: string;
}