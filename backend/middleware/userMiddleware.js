import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const validateCredentials = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await userModel.getUser(email);
        if (!user) {
            return res.status(400).json({ message: 'Email not found in database' });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Login error', error.message);
        res.status(500).json({ message: error.message });
    }
};

export const validateToken = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    try {
        if (!authorizationHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Invalid format' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.body.email = decoded.email;
        next();
    } catch (error) {
        console.error('Token validation error', error.message);
        res.status(401).json({ message: error.message });
    }
};
