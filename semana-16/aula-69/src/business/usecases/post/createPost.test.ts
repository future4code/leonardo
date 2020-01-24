import {CreatePostGateway} from "../../gateways/post/postGateway";
import {IdGeneratorGateway} from "../../gateways/user/idGeneratorGateway";
import {GetUserIdFromTokenGateway} from "../../gateways/auth/autenticationGateway";
import {CreatePostUC, CreatePostUCInput} from "./createPost";
import {Post, PostType} from "../../entities/post";

describe("test for createPost",  () => {
    it("Should create a post", async () =>{
        const input: CreatePostUCInput ={
            photo: "imagem",
            description: "descricao",
            type: PostType.EVENTO,
            token: "token",
            date: "2020-01-01"

        }
        const idGeneratorGateway: IdGeneratorGateway ={
            generate: jest.fn().mockReturnValue("tokenId")
        }

        const getUserIdFromTokenGateway: GetUserIdFromTokenGateway ={
            getUserIdFromToken: jest.fn().mockReturnValue("123")
        }

        const createPostGateway: CreatePostGateway ={
            createPost: jest.fn().mockReturnValue(new Post(
                "tokenId",
                input.photo,
                input.description,
                PostType.NORMAL,
                "123",
                new Date(input.date)))
        }

        const useCase = new CreatePostUC(createPostGateway, idGeneratorGateway, getUserIdFromTokenGateway)
        const result = await useCase.execute(input)
        expect(result).toEqual({message: "Post criado com sucesso"})
    })

    it("Should throw a error if post photo, description, type or token is missing", async () => {
        const input: CreatePostUCInput ={
            photo: "imagem",
            description: "",
            type: PostType.EVENTO,
            token: "token",
            date: "2020-01-01"

        }
        const idGeneratorGateway: IdGeneratorGateway ={
            generate: jest.fn().mockReturnValue("tokenId")
        }

        const getUserIdFromTokenGateway: GetUserIdFromTokenGateway ={
            getUserIdFromToken: jest.fn().mockReturnValue("123")
        }

        const createPostGateway: CreatePostGateway ={
            createPost: jest.fn().mockReturnValue(new Post(
                "tokenId",
                input.photo,
                input.description,
                PostType.NORMAL,
                "123",
                new Date(input.date)))
        }

        const useCase = new CreatePostUC(createPostGateway, idGeneratorGateway, getUserIdFromTokenGateway)
        await expect(useCase.execute(input)).rejects.toThrowError("Dados do Post faltando")
    })

    it("Should throw a error if JWT is invalid", async () => {
        const input: CreatePostUCInput ={
            photo: "imagem",
            description: "description",
            type: PostType.EVENTO,
            token: "token",
            date:"2020-01-01"

        }
        const idGeneratorGateway: IdGeneratorGateway ={
            generate: jest.fn().mockReturnValue("postId")
        }

        const getUserIdFromTokenGateway: GetUserIdFromTokenGateway ={
            getUserIdFromToken: jest.fn().mockRejectedValue(new Error("invalid signature"))
        }

        const createPostGateway: CreatePostGateway ={
            createPost: jest.fn().mockReturnValue(new Post(
                "postId",
                input.photo,
                input.description,
                PostType.NORMAL,
                "123",
                new Date(input.date)))
        }

        const useCase = new CreatePostUC(createPostGateway, idGeneratorGateway, getUserIdFromTokenGateway)
        await expect(useCase.execute(input)).rejects.toThrowError("invalid signature")
    })
})