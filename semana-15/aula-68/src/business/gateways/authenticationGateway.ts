export interface AuthenticationGateway{
    generateToken(userId: string): string
    getUserIdFromToken(token: string): string
}