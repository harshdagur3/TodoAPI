import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 chars"),
    password:z.string().min(6,"password must be at least 6 chars "),
})

export const loginSchema = z.object({
    username:z.string(),
    password:z.string(),
})