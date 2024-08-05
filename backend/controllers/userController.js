import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const registerUser = async (req, res) => {
    const { email, password, rol, lenguage } = req.body;
    try {
        if (!email || !password || !rol || !lenguage) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await userModel.validateUserEmail(email);
        if (user) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        
        const hash = bcrypt.hashSync(password, 10);
        const newUser = await userModel.registerUser({ email, password: hash, rol, lenguage });
        console.log('New User:', newUser);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in registration task', error);
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email } = req.body;
    try {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        console.log('Token:', token);
        res.status(200).json({ token });

    } catch (error) {
        console.error('Error in login task', error);
        res.status(500).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.getUser(email);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        console.log('User:', user);
        res.status(200).json([user]);
    } catch (error) {
        console.error('Error in get user task', error);
        res.status(500).json({ message: error.message });
    }
};

export const userController = {
    registerUser,
    loginUser,
    getUser
};
