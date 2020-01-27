import { AuthenticationGateway } from "../../business/gateways/auth/authenticationGateway";
import * as jwt from 'jsonwebtoken'

export class JwtImplamantation implements AuthenticationGateway {
    private static EXPIRES_IN = "1h"
    getJwtSecretKey(): string {
        if (!process.env.JWT_SECRET_KEY) {
            throw new Error("Missing JWT secret key")
        }
        return process.env.JWT_SECRET_KEY
    }
    generateToken(userId: string): string {
        return jwt.sign(
            { userId },
            this.getJwtSecretKey(),
            { expiresIn: JwtImplamantation.EXPIRES_IN }
        )
    }

    getUserIdFromToken(token: string): string {
        const jwtData = jwt.verify(token, this.getJwtSecretKey()) as JWTData
        return jwtData.userId
    }
}

interface JWTData {
    userId: string
    iat: string
    exp: number
}