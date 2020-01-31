import * as dotenv from "dotenv";
dotenv.config();
let moment = require('moment');
import knex from 'knex';

export abstract class BaseDataBase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: process.env.HOST_DB,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE_DB
        }
    })
    getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]

    getAge (age: string): number {
        const userAge =  moment(age,"YYYY/MM/DD")
        return moment().diff(userAge,"year")
    }
}