import * as dotenvjs from "dotenv";
dotenvjs.config();
let moment = require('moment');
import knex from 'knex';
console.log(process.env.HOST_DB)

export abstract class BaseDataBase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "3.92.184.200",
            user: "leonardo",
            password: "rd1macsenhadb",
            database: "leonardodb"
        }
    })
    getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]

    getAge (age: string): number {
        const userAge =  moment(age,"YYYY/MM/DD")
        return moment().diff(userAge,"year")
    }
}