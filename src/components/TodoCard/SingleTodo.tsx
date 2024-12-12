import {Task} from "../../Layout.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardTitleDone
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import React, {FormEvent} from "react";
import {DialogDemo} from "@/components/DialogForm/DialogForm.tsx";
interface props {
    todo: Task;
    todos: Task[];
    onChange: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTask: (updatedTask: {
        id: number; title: string; description: string, completed: boolean;
        createdAt: Date
    }) => void;
}
export const SingleTodo: React.FC<props> = ({todo, todos, onChange, updateTask}) => {
    const handle = (action: string, id: number, e?: FormEvent) => {
        e?.preventDefault();
        switch (action) {
            case "done":
                onChange(
                    todos.map((todo) =>
                        todo.id === id ? {...todo, completed: !todo.completed} : todo
                    )
                );
                break;
            case "delete":
                onChange(
                    todos.filter((todo) => todo.id !== id)
                )
                break;
        }
    };
    console.log(todos);
    return (
        <form className="items-end" onSubmit={(event: FormEvent) => handle("edit", todo.id, event)}>
            <Card className="w-[440px] justify-center items-center bg-white m-4">
                <CardHeader className="items-center">
                    {todo.completed ? (
                        <CardTitleDone>{todo.title}</CardTitleDone>
                    ) : (
                        <CardTitle>{todo.title}</CardTitle>
                    )}
                </CardHeader>
                <CardContent >
                    <div className="grid w-full gap-4">
                        <CardDescription className="text-center">{todo.description}</CardDescription>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="text-white bg-black" variant="outline" size="wide" onClick={() => handle("done", todo.id)}>
                        Complete
                    </Button>
                    <Button
                        className="text-white bg-black" variant="outline"
                        size="wide"
                        onClick={() => handle("delete", todo.id)}
                    >
                        Delete
                    </Button>

                    <Button
                        className="text-black border-2" variant="link"
                        size="wide"
                    >
                        <DialogDemo task={todo} updateTask={updateTask} />
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}