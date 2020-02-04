export interface EncryptCryptographyGateway {
    encrypt(word: string): Promise<string>
}

export interface CompareCryptographyGateway {
    compare(word: string, hash: string): Promise<boolean>
}