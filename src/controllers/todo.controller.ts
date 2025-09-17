import type { Request, Response, NextFunction } from "express";
import { createTodoSchema } from "../validations/todo.validation.js";
import Todo from "../models/todo.model.js";



//CREATE
//POST /api/todo

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Request body:", req.body);

    try {
        const parsedData = createTodoSchema.parse(req.body);
        const newTodo = await Todo.create(parsedData);
        res.status(201).json(newTodo);
    } catch (error) {
        next(error);
    }
}

//GET /api/todos
export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        next(error);
    }
}

//PUT /api/todos/:id

export const updateTodo = async(req: Request, res: Response, next: NextFunction) => {
    try {
        

        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updateTodo);
    } catch (error) {
        next(error);
    }
}

//DELETE /api/todos/:id
//delete by id
export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const { id } = req.params;

        const deletedTodo = Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        next(error);
    }
}

//GET /api/todos/:id
// get todos by id

export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json(todo);
    } catch (error) {
        next(error);
    }
}
