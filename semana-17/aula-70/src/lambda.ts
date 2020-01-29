import {Request, Response} from "express";
import {UserDataBase} from "./data/userDataBase";
import {UuidIdGenerator} from "./services/uuidIdGenerator";
import {BcryptImplamantation} from "./services/bcryptCryptography";
import {JWTCryptography} from "./services/JWTCryptography";
import {CreateUserUC, CreateUserUCInput} from "./business/usecases/user/createUser";
import {LoginUC, LoginUCInput} from "./business/usecases/auth/login";

export interface Evento {
    path: string
    name: string,
    email: string,
    birthday: string,
    photo: string,
    password: string
}

exports.handler = async (event: Evento) => {
    switch (event.path) {
        case "/signup":
            try{
            const useCase = new CreateUserUC(
                    new UserDataBase(),
                    new BcryptImplamantation(),
                    new UuidIdGenerator(),
                    new JWTCryptography()
                )
                const input: CreateUserUCInput = {
                    name: event.name,
                    email: event.email,
                    birthday: event.birthday,
                    photo: event.photo,
                    password: event.password
                }
                return await useCase.execute(input)
            } catch (error) {
                return error.message
            }
            break
        case "/login":
            try {
                const useCase = new LoginUC(
                    new UserDataBase(),
                    new BcryptImplamantation(),
                    new JWTCryptography()
                )
                const input: LoginUCInput = {
                    email: event.email,
                    password: event.password
                }
                return await useCase.execute(input)
            }catch (error) {
                return error.message
            }
            break
        default:
            return
    }
}
