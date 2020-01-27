import knex from 'knex'

export abstract class BaseDataBase {
    
    protected connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'leonardo',
          password: process.env.SENHA_BANCO,
          database: 'leonardo'
        }
      })

    getSQLDatefromTSDate = (date: Date): string => date.toISOString().split('T')[0]
}