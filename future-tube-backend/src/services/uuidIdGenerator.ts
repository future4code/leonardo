import { IdGeneratorGateway } from "../../src/business/gateways/services/idGenerator";
import v4 from "uuid/v4";

export class UuidIdGenerator implements IdGeneratorGateway {
    generate(): string {
        return v4();
    }
}