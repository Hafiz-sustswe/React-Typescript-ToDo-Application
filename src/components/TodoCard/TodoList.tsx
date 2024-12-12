import React from "react";
import {SingleTodo} from "@/components/TodoCard/SingleTodo.tsx";
import {Task} from "../../Layout.tsx"
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
    searchQuery: string;
}

//
export const TodoList: React.FC<props> = ({todos, onChange, updateTask, searchQuery}) => {

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            {filteredTodos.map((todo) => (
                <SingleTodo todo={todo} todos={todos} onChange={onChange} updateTask={updateTask}/>
            ))}
        </div>
    )
};