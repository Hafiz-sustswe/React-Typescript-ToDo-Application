import React, {useState} from 'react';

import {TodoList} from "@/components/TodoCard/TodoList.tsx";
import SearchBox from "@/components/SearchBox/SearchBox.tsx";
import {ShadCnTodoForm} from "@/components/InputForm/ShadCnFrom.tsx";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    }

    const addTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const updateTask = (updatedTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        )
        console.log(updatedTask);
    }
    // const onChange = () => {
    //     console.log("change");
    // };


    return (
        <div className="flex justify-center items-center min-h-screen bg-white-100">
            <div className="bg-sky-100 rounded-lg shadow-lg w-full max-w-lg p-6">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Todo App</h1>

                <ShadCnTodoForm addTask={addTask}/>

                <h1 className="align-center  text-2xl font-bold mb-4">Todo App</h1>

                <SearchBox onSearch={handleSearch}/>
                <TodoForm addTask={addTask}/>
                <TodoList todos={tasks} onChange={setTasks} updateTask={updateTask} searchQuery={searchQuery}/>
            </div>
        </div>

    );
};

export default App;
