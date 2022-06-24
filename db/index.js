import pg from 'pg';
import {connectionString} from '../db.config';


const pool = new pg.Pool({ 
    connectionString,
    ssl:{
        rejectUnauthorized: false
    }
})

export default pool