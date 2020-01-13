import { UserGateway } from "../business/gateways/UserGateway";
import knex from 'knex'
import { User } from "../business/entities/User";


export class UserDataBase implements UserGateway {
    private connection: knex
    

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'leonardo',
                password: 'c9e5f699eea13f088949aa3b4614241f',
                database: 'leonardo'
            }
        })
        
    }

    async createUser(user: User) {
        await this.connection('users').insert(user);
    }
}