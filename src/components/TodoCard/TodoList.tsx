import React from "react";
import { SingleTodo } from "@/components/TodoCard/SingleTodo.tsx";
import { Task } from "../../Layout.tsx";

interface props {
  todos: Task[];
  handle: (handle: { action: string; id: number; updatedTask: Task }) => void;
  searchQuery: string;
}

export const TodoList: React.FC<props> = ({ todos, handle, searchQuery }) => {
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div>
      {filteredTodos.map((todo) => (
        <SingleTodo todo={todo} handle={handle} />
      ))}
    </div>
  );
};
