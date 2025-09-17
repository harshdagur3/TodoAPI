import { log } from "console";
import type{ Response, Request, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ZodError) {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.issues.map(issue => ({
                path: issue.path,
                message: issue.message,
            })),
        });
    }

    console.log("Unexpected Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
}