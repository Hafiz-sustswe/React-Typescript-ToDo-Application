import {Task} from "../../App.tsx"
// import {MdDeleteForever, MdDoneOutline, MdEdit} from "react-icons/md";
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
import React, {ChangeEvent, FormEvent, useState} from "react";
import {MdDeleteForever, MdDoneOutline, MdEdit} from "react-icons/md";
import {DialogDemo} from "@/components/DialogForm/DialogForm.tsx";
interface props {
    todo: Task;
    todos: Task[];
    onChange: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTask: (updatedTask: {
        id: number; title: string; description: string, completed: boolean;
        createdAt: Date
    }) => void;
    searchQuery: string;
}
export const SingleTodo: React.FC<props> = ({todo, todos, onChange, updateTask, searchQuery}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editedText, setEditedText] = useState<string>(todo.title);

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
            case "edit":
                onChange(
                    todos.map((todo) =>
                        todo.id === id ? todo : todo
                    )
                );
                setEdit(false);
                break;
            case "delete":
                onChange(
                    todos.filter((todo) => todo.id !== id)
                )
                break;
        }
    };
    console.log(editedText);
    console.log(todos);
    return (
        <form  onSubmit={(event: FormEvent) => handle("edit", todo.id, event)}>
            <Card className="w-[440px] bg-white m-4">
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
                        onClick={() => {
                            if (!edit) setEdit(true);
                        }}
                    >
                        Edit
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}