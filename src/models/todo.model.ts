import mongoose, { Schema, Document } from "mongoose";


export interface ITodo extends Document {
    title: string;
    description?: string | undefined;
    completed: boolean;
}

const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
},
    {
        timestamps: true,
    }
);


const Todo = mongoose.model<ITodo>("Todo", TodoSchema);
export default Todo;