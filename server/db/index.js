/* import { query } from 'express'; */
import pg from "pg";
/* import {connectionString} from '../db.config';
 */

const pool = new pg.Pool({
  host: "localhost",
  user: "root",
  password: "",
});

export default function query(text, params) {
  return pool.query(text, params);
}
