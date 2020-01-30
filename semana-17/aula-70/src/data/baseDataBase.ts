import * as dotenv from "dotenv";
dotenv.config();

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
}