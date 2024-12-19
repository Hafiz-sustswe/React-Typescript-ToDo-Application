import React, { FormEvent, useState } from "react";
import { TodoList } from "@/components/TodoCard/TodoList.tsx";
import SearchBox from "@/components/SearchBox/SearchBox.tsx";
import { ShadCnTodoForm } from "@/components/InputForm/ShadCnFrom.tsx";
import { Task, Action } from './todoAction'

const LandingPage: React.FC<{onStarted: () => void}> = ({ onStarted }) => {
  return (
    <div className="min-h-screen bg-sky-250 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="items-center">
            <img
              src="/picture.png"
              alt="To-Do List Illustration"
              className="w-full max-w-lg rounded-lg "
            />
          </div>

          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Taskify Application
            </h1>
            <p className="text-black text-lg font-bold">
              Welcome to My Application
            </p>
            <button
              className="px-6 py-3 bg-white text-black-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition"
              onClick={() => onStarted()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Layout: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [start, setStart] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const handle = (action: Action) => {
    switch (action.type) {
      case "done":
        setTasks(
          tasks.map((todo) =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
          ),
        );
        break;
      case "delete":
        setTasks(tasks.filter((todo) => todo.id !== action.id));
        break;
      case "edit":
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === action.updatedTask.id ? action.updatedTask : task,
          ),
        );
        break;
      default:
        action satisfies never
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-sky-100 via-white-300 to-sky-200">
      {start ? (
        <LandingPage onStarted={() => setStart(false)} />
      ) : (
        <>
          <div className="container flex-col max-w-full">
            <div className="flex justify-center  bg-white-100 h-50">
              <div className="bg-sky-100 rounded-lg shadow-lg w-full max-w-lg max-h-[32rem] p-6 mt-10">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
                  Todo App
                </h1>
                <SearchBox onSearch={handleSearch} />
                <ShadCnTodoForm addTask={addTask} />
              </div>
            </div>

            <div className=" flex bg-white-100 justify-center  top-40  mt-10">
              <div className="bg-sky-100 rounded-lg shadow-lg w-full max-w-lg p-6">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
                  Your Task Lists{" "}
                </h1>
                <TodoList
                  todos={tasks}
                  handle={handle}
                  searchQuery={searchQuery}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
