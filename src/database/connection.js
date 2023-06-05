import sql from 'mssql'
import config from '../config';

const dbSettings = {
    user: 'sa',
    password: '1304',
    server: 'INSPIRON15',
    database: 'App_historietas',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    }
};

export async function getConnection() {
    try {
        //conexion a mi db
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}

//getConnection();
export { sql };