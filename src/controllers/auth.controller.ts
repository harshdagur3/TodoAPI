import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signupSchema } from "../validations/auth.validation.js";
import { User } from "../models/user.model.js";



const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const parsed = signupSchema.parse(req.body);
        //check existing user
        const exists = await User.findOne({ username: parsed.username });
        if (exists) return res.status(400).json({ error: "User already exists!" });

        //hashed password
        const hashed = await bcrypt.hash(parsed.password, 10);
        //create user
        const user = await User.create({ username: parsed.username, password: hashed });

        return res.status(201).json({ message: "User created!", id: user._id, username: user.username });
    } catch (error) {
        next(error);
    }
}