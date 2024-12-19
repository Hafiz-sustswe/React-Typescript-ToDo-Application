import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Settings } from "lucide-react";
import React, { useState } from "react";
import { Action } from "@/todoAction";

export function DialogDemo({
  task,
  handle,
}: {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
  };
  handle: (action: Action) => void;
}) {
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    completed: task.completed,
    createdAt: task.createdAt,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [id]: value,
    }));
    console.log(updatedTask.title);
  };

  const handleSubmit = () => {
    handle({
      type: "edit",
      updatedTask: {
        id: task.id,
        title: updatedTask.title,
        description: updatedTask.description,
        completed: updatedTask.completed,
        createdAt: updatedTask.createdAt,
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task Name
            </Label>
            <Input
              id="title"
              value={updatedTask.title}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={updatedTask.description}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              className="text-black border-2"
              variant="link"
              size="wide"
              type="submit"
              onClick={handleSubmit}
            >
              Save changes
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
