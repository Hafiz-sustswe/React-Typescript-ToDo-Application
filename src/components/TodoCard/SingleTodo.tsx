import {Task} from "../../App.tsx"
import React, {ChangeEvent, FormEvent, useState} from "react";
import {MdDeleteForever, MdDoneOutline, MdEdit} from "react-icons/md";
interface props {
    todo: Task;
    todos: Task[];
    onChange: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const SingleTodo: React.FC<props> = ({todo, todos, onChange}) => {
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
                        todo.id === id ? {...todo, title: editedText} : todo
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


        <form onSubmit={(event: FormEvent) => {
            handle("edit", todo.id, event)
        }}>
            {edit ? (<input value={editedText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEditedText(e.target.value)
            }}/>) : (todo.completed ? (<s>{todo.title}</s>) : (
                <span>{todo.title}</span>))}
            <span onClick={() => {
                if (!edit && !todo.completed) setEdit(!edit);
            }}> <MdEdit/> </span>
            <span onClick={() => handle("delete", todo.id)}> <MdDeleteForever/> </span>
            <span onClick={() => handle("done", todo.id)}> <MdDoneOutline/> </span>
        </form>
    )
}