import { GetVideoFromAUserGateway } from "../../gateways/video/videoGateway";
import { Video } from "../../entities/video/video";
import {
  GetVideoForAUserUCInput,
  GetVideoFromAUserUC
} from "./getVideoFromAUserUC";

describe("Test for get video from a user UC", () => {
  it("should return a video from a user", async () => {
    const videoMock = new Video(
      "123",
      "www.video.com",
      "video bom",
      "video muito engraçado",
      "123"
    );
    const returnMock = {
      videos: [videoMock]
    };

    const getVideoForAUserGateway: GetVideoFromAUserGateway = {
      getVideosForAUser: jest.fn().mockReturnValue(returnMock)
    };

    const useCase = new GetVideoFromAUserUC(getVideoForAUserGateway);

    const input: GetVideoForAUserUCInput = {
      userId: "123"
    };

    const result = await useCase.execute(input);
    expect(result).toEqual(returnMock);
  });
});
