import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres', //usuario que creo base de datos
    host: 'localhost', // donde esta base de datos. Si esta en digital ocean AWS habria que poner IP o dominio
    password: 'postgres', 
    database: 'tsdatabase', 
    port: 5432
})

