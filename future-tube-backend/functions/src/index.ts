import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express, {Request, Response} from "express";
import cors from "cors";
import {UploadVideoUC, UploadVideoUCInput} from "./business/usecases/video/uploadVideoUC";
import {VideoDataBase} from "./data/videoDataBase";
import {UuidIdGenerator} from "./services/uuidIdGenerator";
import {UserDataBase} from "./data/userDataBase";
import {BcryptImplamantation} from "./services/bcryptCryptography";
import {JWTCryptography} from "./services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "./business/usecases/user/createUser";
import {LoginUC, LoginUCInput} from "./business/usecases/auth/login";
import {GetAllUsersUC, GetAllUsersUCInput} from "./business/usecases/user/getAllUsers";
import {GetVideoFromAUserUCInput, GetVideoFromAUserUC} from "./business/usecases/video/getVideoFromAUserUC";
import {DeleteVideoUC, DeleteVideoUCInput} from "./business/usecases/video/deleteVideoUC";
import {GetVideoInformationUC, GetVideoInformationUCInput} from "./business/usecases/video/getVideoInformationUC";
import {GetPaginatedAllVideosUC, GetPaginatedAllVideosUCInput} from "./business/usecases/video/getPaginatedAllVideosUC";
import {EditVideoInformationUC, EditVideoInformationUCInput} from "./business/usecases/video/editVideoInformationUC";


admin.initializeApp();
const app = express();
app.use(cors({origin: true}));
const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.get("/hello", async (req, res) => {
    admin.firestore().collection('video').onSnapshot((queryResponse) => {
        const result = {
            videos: queryResponse.docs.map((doc) => {
                return {
                    url: doc.get("url"),
                    description: doc.get("description"),
                    name: doc.get("name"),
                }
            })
        }
        res.status(200).send(result);
    })
});

app.post("/uploadVideo", async (req, res) => {
    try {
        const useCase = new UploadVideoUC(
            new VideoDataBase(),
            new UuidIdGenerator(),
            new JWTCryptography()
        )

        const input: UploadVideoUCInput = {
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            token: getTokenFromHeaders(req.headers)
        }

        const result = await useCase.execute(input)

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.post('/createUser', async (request: Request, response: Response) => {
    try {
        const gateway = new UserDataBase()
        const idGenerator = new UuidIdGenerator()
        const bcrypt = new BcryptImplamantation()
        const auth = new JWTCryptography()
        const useCase = new CreateUserUC(
            gateway, bcrypt, idGenerator, auth
        )

        const input: CreateUserUCInput = {
            name: request.body.name,
            email: request.body.email,
            birthday: request.body.birthday,
            photo: request.body.photo,
            password: request.body.password
        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})
app.post('/login', async (request: Request, response: Response) => {
    try {
        const useCase = new LoginUC(
            new UserDataBase(),
            new BcryptImplamantation(),
            new JWTCryptography()
        )
        const input: LoginUCInput = {
            email: request.body.email,
            password: request.body.password
        }
        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post("/getAllUsers", async (request, response) => {
    try {
        const useCase = new GetAllUsersUC(
            new UserDataBase(),
            new JWTCryptography(),
        )
        const input: GetAllUsersUCInput = {
            token: getTokenFromHeaders(request.headers)
        }
        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post("/getVideosFromAUser", async (request: Request, response: Response) => {
    try {
        const useCase = new GetVideoFromAUserUC(
            new VideoDataBase(),
            new JWTCryptography()
        )

        const input: GetVideoFromAUserUCInput = {
            token: getTokenFromHeaders(request.headers),
            userId: request.body.userId
        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.delete("/deleteVideo", async (request: Request, response: Response) => {
    try {
        const useCase = new DeleteVideoUC(
            new VideoDataBase(),
            new VideoDataBase(),
            new JWTCryptography(),
        )

        const input: DeleteVideoUCInput = {
            videoId: request.body.videoId,
            token: getTokenFromHeaders(request.headers),

        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.post("/getVideoInformation", async (request: Request, response: Response) => {
    try {
        const useCase = new GetVideoInformationUC(
            new VideoDataBase(),
            new JWTCryptography(),
            new VideoDataBase()
        )

        const input: GetVideoInformationUCInput = {
            videoId: request.body.videoId,
            token: getTokenFromHeaders(request.headers),

        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})


app.post("/getPaginatedVideos", async (request: Request, response: Response) => {
    try {
        const useCase = new GetPaginatedAllVideosUC(
            new VideoDataBase(),
            new JWTCryptography(),
        )

        const input: GetPaginatedAllVideosUCInput = {
            token: getTokenFromHeaders(request.headers),
            page: request.body.page

        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

app.put("/editVideoInformation", async (request: Request, response: Response) => {
    try {
        const useCase = new EditVideoInformationUC(
            new JWTCryptography(),
            new VideoDataBase(),
            new VideoDataBase()
        )

        const input: EditVideoInformationUCInput = {
            token: getTokenFromHeaders(request.headers),
            videoId: request.body.videoId,
            title: request.body.title,
            description: request.body.description
        }

        const result = await useCase.execute(input)
        response.status(200).send(result)
    } catch (err) {
        response.status(400).send({
            message: err.message
        })
    }
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const futureTubeLeo = functions.https.onRequest(app);