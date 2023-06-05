import { config } from 'dotenv'
config();



export default {
    //port: 8000
    port: process.env.Port || 7000,
    dbUser: process.env.dbUser || '',
    dbPassword: process.env.dbPassword || '',
    dbServer: process.env.dbServer || '',
    dbDataBase: process.env.dbDataBase || ''
}