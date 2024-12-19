import React from "react";
import { SingleTodo } from "@/components/TodoCard/SingleTodo.tsx";
import { Task, Action } from "../../todoAction";

interface props {
  todos: Task[];
  handle: (action: Action) => void;
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
