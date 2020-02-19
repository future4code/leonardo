import {GetPaginatedAllVideosGateway} from "../../business/gateways/video/videoGateway";
import * as admin from "firebase-admin";

export class VideoDataBase implements GetPaginatedAllVideosGateway {
    getPaginatedAllVideos(
        page: number,
        offset: number
    ): any {
        return admin.firestore().collection('video').onSnapshot((queryResponse) => {
            return {
                videos: queryResponse.docs.map((doc) => {
                    return {
                        url: doc.get("url"),
                        description: doc.get("description"),
                        name: doc.get("name"),
                    }
                })
            }
        })
    }
}
