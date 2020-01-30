import {LoginUC, LoginUCInput} from "../business/usecases/auth/login";
import {UserDataBase} from "../data/userDataBase";
import {BcryptImplamantation} from "../services/bcryptCryptography";
import {JWTCryptography} from "../services/JWTCryptography";
import {GetAllUsersUC, GetAllUsersUCInput} from "../business/usecases/user/getAllUsers";
import {RelateUserUC, RelateUserUCInput} from "../business/usecases/user/relateUser";
import {GetMatchesUC, GetMatchesUCInput} from "../business/usecases/user/getMatches";
import {CreateUserUC, CreateUserUCInput} from "../business/usecases/user/createUser";
import {UuidIdGenerator} from "../services/uuidIdGenerator";

//Pelo que eu entendi ficou correto mandar somente uma lambda
//concentrei tudo na astroMatchLambda
// a API Gateway ficou no endereco https://03njycqr6k.execute-api.us-east-1.amazonaws.com/dev

export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        switch (path) {
            case "createUser":
                try{
                    const useCase = new CreateUserUC(
                        new UserDataBase(),
                        new BcryptImplamantation(),
                        new UuidIdGenerator(),
                        new JWTCryptography()
                    )
                    const input: CreateUserUCInput = {
                        name: event.body.name,
                        email: event.body.email,
                        birthday: event.body.birthday,
                        photo: event.body.photo,
                        password: event.body.password
                    }
                    return await useCase.execute(input)
                } catch (error) {
                    return error.message
                }
                break
            case "getAllUsers":
                try {
                    const useCase = new GetAllUsersUC(
                        new UserDataBase(),
                        new JWTCryptography(),
                    )
                    const input: GetAllUsersUCInput = {
                        token: event.headers["auth"]
                    }
                    return await useCase.execute(input)
                }catch (error) {
                    return error.message
                }
                break
            case "login":
                try {
                    const useCase = new LoginUC(
                        new UserDataBase(),
                        new BcryptImplamantation(),
                        new JWTCryptography()
                    )
                    const input: LoginUCInput = {
                        email: event.body.email,
                        password: event.body.password
                    }
                    return await useCase.execute(input)
                }catch (error) {
                    return error.message
                }
                break
            case "relateUser":
                try {
                    const useCase = new RelateUserUC(
                        new JWTCryptography(),
                        new UserDataBase(),
                        new UserDataBase()
                    )
                    const input: RelateUserUCInput = {
                        token: event.headers["auth"],
                        userIdToRelate: event.body.userIdToRelate
                    }
                    return await useCase.execute(input)
                }catch (error) {
                    return error.message
                }
                break
            case "getMatches":
                try {
                    const useCase = new GetMatchesUC(
                        new JWTCryptography(),
                        new UserDataBase(),
                    )
                    const input: GetMatchesUCInput = {
                        token: event.headers["auth"]
                    }
                    return await useCase.execute(input)
                }catch (error) {
                    return error.message
                }
                break
            default:
                throw new Error("Rota não existe");
        }
    }
}