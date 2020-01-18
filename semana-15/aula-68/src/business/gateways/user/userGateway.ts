import { User } from "../../entities/User";

export interface UserGateway {
    createUser(user: User): Promise<any>
    getUserByEmail(email: string): Promise<User>
    getUserById(id: string): Promise<User>
    updatePassword(id: string, password: string): Promise<void>
    verifyUserExists(id: string): Promise<boolean>
    createUserRelation(followerId: string, followedId: string): Promise<void>
}