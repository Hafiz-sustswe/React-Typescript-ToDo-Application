
import {Task} from "../../Layout.tsx"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardTitleDone,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import React, { FormEvent } from "react";
import { DialogDemo } from "@/components/DialogForm/DialogForm.tsx";

interface props {
  todo: Task;
  handle: (handle: {
    action: string;
    id: number;
    updatedTask: Task;
    e?: FormEvent;
  }) => void;
}


export const SingleTodo: React.FC<props> = ({ todo, handle }) => {
  return (
    <Card className="w-[440px] bg-white m-4">
      <CardHeader className="items-center">
        {todo.completed ? (
          <CardTitleDone>{todo.title}</CardTitleDone>
        ) : (
          <CardTitle>{todo.title}</CardTitle>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <CardDescription className="text-center">
            {todo.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardContent className="flex justify-between">
        <Button
          className="text-white bg-black"
          variant="outline"
          size="wide"
          onClick={() =>
            handle({
              action: "done",
              id: todo.id,
              updatedTask: todo,
            })
          }
        >
          Complete
        </Button>
        <Button
          className="text-white bg-black"
          variant="outline"
          size="wide"
          onClick={() =>
            handle({
              action: "delete",
              id: todo.id,
              updatedTask: todo,
            })
          }
        >
          Delete
        </Button>

        <Button className="text-black border-2" variant="link" size="wide">
          <DialogDemo task={todo} handle={handle} />
        </Button>
      </CardContent>
    </Card>
  );
};
