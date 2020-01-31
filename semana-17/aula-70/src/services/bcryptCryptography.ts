// import * as bcrypt from 'bcryptjs'
let bcrypt = require('bcryptjs');
import { EncryptCryptographyGateway } from "../business/gateways/cryptography/cryptographyGateway";

export class BcryptCryptography implements EncryptCryptographyGateway {
    private static BCRYPT_SALT_ROUNDS = 10

    async encrypt(word: string): Promise<string> {
        const salt = await bcrypt.genSalt(BcryptCryptography.BCRYPT_SALT_ROUNDS)
        const encryptedWord = await bcrypt.hash(
            word,
            salt
        )
        return encryptedWord
    }
    async compare(word: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(word, hash)
    }
}