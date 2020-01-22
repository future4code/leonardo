import { IdGeneratorGateway } from "../business/gateways/user/idGeneratorGateway";
import v4 from "uuid/v4";

export class UuidImplementation implements IdGeneratorGateway {
    generate(): string {
        return v4();
    }

}