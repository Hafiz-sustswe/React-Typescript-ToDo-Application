import React, {useState} from 'react';
import TodoForm from "@/components/InputForm/TodoForm.tsx";
import {DialogDemo} from "@/components/DialogForm/DialogForm.tsx";

interface Task {
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


    return (
        <div className="flex justify-center bg-sky-100">

            <div className="p-4">

                <h1 className="align-center  text-2xl font-bold mb-4">Todo App</h1>


                <TodoForm addTask={addTask}/>


                <ul className="mt-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="border-b border-gray-300 py-2">
                            <h2 className="font-bold">{task.title}</h2>

                            <p>{task.description}</p>

                            {/*<p className="text-sm text-gray-500">Created at: {task.createdAt.toLocaleString()}</p>*/}
                            <DialogDemo task={task} updateTask={updateTask}/>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
