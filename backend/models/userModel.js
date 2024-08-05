import { pool } from "../config/db_connect.js";

try {
    await pool.query('SELECT NOW()');
    console.log('Database connection successful');
} catch (error) {
    console.error('Database connection error:', error);
}

const getUser = async (email) => {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const registerUser = async ({ email, password, rol, lenguage }) => {
    const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [email, password, rol, lenguage];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const validateUserEmail = async (email) => {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const userModel = { 
    getUser, 
    registerUser, 
    validateUserEmail 
};
