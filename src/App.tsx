import React, {useState} from 'react';
import TodoForm from "@/components/InputForm/TodoForm.tsx";
import {TodoList} from "@/components/TodoCard/TodoList.tsx";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

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
    const onChange = () => {
        console.log("change");
    };


    return (
        <div className="flex justify-center bg-sky-100">

            <div className="p-4">

                <h1 className="align-center  text-2xl font-bold mb-4">Todo App</h1>


                <TodoForm addTask={addTask}/>
                <TodoList todos={tasks} onChange={setTasks} updateTask={updateTask}/>
            </div>
        </div>
    );
};

export default App;
