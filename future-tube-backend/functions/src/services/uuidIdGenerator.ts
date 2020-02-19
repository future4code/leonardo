import {IdGeneratorGateway} from "../business/gateways/services/idGeneratorGateway";

const v4 = require('uuid/v4');

export class UuidIdGenerator implements IdGeneratorGateway {
    generate(): string {
        return v4();
    }
}