/* import { query } from 'express'; */
import pg from "pg";
/* import {connectionString} from '../db.config';
 */

const pool = new pg.Pool({
    host: "ec2-54-77-40-202.eu-west-1.compute.amazonaws.com",
    databse: "dbl6mu92l0r0sm",
    user: "khmsqfsvqhettd",
  password: "2986b46c0e6335adfa08e50ec919429c85285df2e39a65fa0dcd8c03403f2684",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
 