import * as bcrypt from 'bcrypt'
import { CriptographyGateway } from '../../business/gateways/crypt/cryptographyGateway';

export class BcryptImplamantation implements CriptographyGateway {
    private static BCRYPT_SALT_ROUNDS = 10

    async encrypt(word: string): Promise<string> {
        const salt = await bcrypt.genSalt(BcryptImplamantation.BCRYPT_SALT_ROUNDS)
        const encryptedWord = await bcrypt.hash(
            word,
            salt
        )

        return encryptedWord
    }

    async compare(word: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(word, hash) 
    }

}