import express from "express";
import helloRoutes from "./routes/hello.routes.js";
import todoRoutes from "./routes/todo.routes.js"
import { errorHandler } from "./middleware/error.middleware.js";
import { logger } from "./middleware/logger.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

connectDB();


const app = express();
const PORT = Number(process.env.PORT);

//middleware
app.use(express.json());
app.use(logger);

//routes
app.use("/api/hello", helloRoutes);
app.use("/api/todos", todoRoutes);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
