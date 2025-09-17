import type { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
    res.json({ message: "Hello from MVC API" });
}