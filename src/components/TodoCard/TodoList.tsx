import React from "react";
import {SingleTodo} from "@/components/TodoCard/SingleTodo.tsx";
import {Task} from "../../App.tsx"
// import {Todo} from "../model";
// import {SingleTodo} from "./SingleTodo";
//
interface props {
    todos: Task[];
    onChange: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTask: (updatedTask: {
        id: number; title: string; description: string, completed: boolean;
        createdAt: Date
    }) => void;

}

//
export const TodoList: React.FC<props> = ({todos, onChange, updateTask}) => {
    return (
        <div>
            {todos.map((todo) => (
                <SingleTodo todo={todo} todos={todos} onChange={onChange} updateTask={updateTask}/>
            ))}
        </div>
    )
};