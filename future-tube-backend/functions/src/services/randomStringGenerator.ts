import {RandomStringGeneratorGateway} from "../business/gateways/string/randamStringGenerator";
import * as randomstring from 'randomstring'

export class RandomStringGenerator implements RandomStringGeneratorGateway {
    generateRandomString(length: number): string {
        return randomstring.generate(length).toUpperCase()
    }
}