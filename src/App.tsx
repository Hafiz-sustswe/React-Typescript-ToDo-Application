import React, { FormEvent, useState } from "react";
import { TodoList } from "@/components/TodoCard/TodoList.tsx";
import SearchBox from "@/components/SearchBox/SearchBox.tsx";
import { ShadCnTodoForm } from "@/components/InputForm/ShadCnFrom.tsx";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handle = ({
    action,
    id,
    updatedTask,
    e,
  }: {
    action: string;
    id: number;
    updatedTask: Task;
    e?: FormEvent;
  }) => {
    e?.preventDefault();
    switch (action) {
      case "done":
        setTasks(
          tasks.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        );
        break;
      case "delete":
        setTasks(tasks.filter((todo) => todo.id !== id));
        break;
      case "edit":
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task,
          ),
        );
        break;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-sky-100 rounded-lg shadow-lg w-full max-w-lg p-6">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Todo App
        </h1>

        <SearchBox onSearch={handleSearch} />
        <ShadCnTodoForm addTask={addTask} />
        <TodoList todos={tasks} handle={handle} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;
