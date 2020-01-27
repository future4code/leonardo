import {v4} from 'uuid'
import { IdGeneratorGateway } from '../business/gateways/user/idGeneretorGateway'

export class generateRandomId implements IdGeneratorGateway {
  generate(){
    return v4()
  }
}
