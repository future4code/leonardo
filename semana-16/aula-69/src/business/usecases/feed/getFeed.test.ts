import {GetFeedUC, getFeedUCOutput} from "./getFeed";
import {FeedResponse, GetFeedGateway} from "../../gateways/feed/feedGateway";
import {JWTCryptography} from "../../../services/JWTCryptography";
import {Post, PostType} from "../../entities/post";


describe("test for get feed", ()=>{
    it("shold get feed for a user", async () =>{
        const input = {
            token: "token"
        }
        const post = new Post("id", "photo", "description", PostType.NORMAL, "123", new Date("2020-01-01"))
        const userNameTest = "leo"
        const output =[{
            post : post,
            userName: userNameTest
        }]


        const feedResponse: getFeedUCOutput = {
            posts: [{
                id: "id",
                photo: "photo",
                description: "description",
                type: "normal",
                userName: "leo",
                creationDate:"2020-01-01"
            }]
        }

        const feedGateway: GetFeedGateway ={
            getPostsFeedForUser: jest.fn().mockReturnValue(output)
        }

        const authenticationGateway: JWTCryptography = {
            generateToken: jest.fn(),
            getJWTSecretKey: jest.fn(),
            getUserIdFromToken: jest.fn().mockReturnValue("123")
        }

        const usecase = new GetFeedUC(feedGateway, authenticationGateway)
        const result = await usecase.execute(input)
        expect(result).toEqual(feedResponse)
    })
})