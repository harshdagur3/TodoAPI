import { Router } from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todo.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = Router();

router.use(authMiddleware);

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;