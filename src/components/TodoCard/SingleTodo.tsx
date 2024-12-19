
import { Task, Action } from "../../todoAction"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardTitleDone,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import { DialogDemo } from "@/components/DialogForm/DialogForm.tsx";

interface props {
  todo: Task;
  handle: (action: Action) => void;
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
          <CardDescription className="break-words text-center">
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
              type: "done",
              id: todo.id
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
              type: "delete",
              id: todo.id,
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
