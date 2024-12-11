import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}

const TodoForm: React.FC<{ addTask: (task: Task) => void }> = ({ addTask }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() && description.trim()) {
            const newTask: Task = {
                id: Date.now(),
                title,
                description,
                completed: false,
                createdAt: new Date(),
            };
            addTask(newTask);
            setTitle(title.trim());
            setDescription(description.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <Input
                type="text"
                placeholder="Enter Your Task Title Here"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                className="p-2 border border-gray-300 rounded bg-white"
            />
            <Textarea
                placeholder="Enter Your Task Description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                className="p-2 border border-gray-300 rounded bg-white"
            />
            <Button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add Task
            </Button>
        </form>
    );
};

export default TodoForm;
