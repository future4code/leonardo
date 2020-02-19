import {UploadVideoGateway} from "../../gateways/video/videoGateway";
import {IdGeneratorGateway} from "../../gateways/services/idGenerator";
import {UploadVideoUC, UploadVideoUCInput} from "./uploadVideoUC";

describe("Test for upload video UC", () => {
    const uploadVideoGateway: UploadVideoGateway ={
        uploadVideo: jest.fn()
    }

    const idGeneratorGateway: IdGeneratorGateway ={
        generate: jest.fn().mockReturnValue("123")
    }

    const useCase = new UploadVideoUC(
        uploadVideoGateway,
        idGeneratorGateway
    )

    it("should upload a video", async () =>{

        const input : UploadVideoUCInput ={
            url: "www.video.com",
            title: "testo do titulo",
            description: "descricao do video",
            userId: "1111",
        }

        const result = await useCase.execute(input)

        expect(result).toEqual({message: "Upload do video realizado com sucesso"})
    })

    it("should throw a error if title is not defined", async () =>{
        const input : UploadVideoUCInput ={
            url: "www.video.com",
            title: "",
            description: "descricao do video",
            userId: "1111",
        }

        await expect(useCase.execute(input)).rejects.toThrowError("Dado do video faltando")
    })
})