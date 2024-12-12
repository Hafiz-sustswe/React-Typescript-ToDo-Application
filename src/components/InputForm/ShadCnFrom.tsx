import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as yup from "yup";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {todoSchema} from "@/components/Validation/InputFormValidation.ts";
import React, {useState} from "react";
import {Task} from "@/App.tsx";



type FormValues = yup.InferType<typeof todoSchema>;

export const ShadCnTodoForm: React.FC<{ addTask: (task: Task) => void }> = ({ addTask }) => {

    const form = useForm<FormValues>({
        resolver: yupResolver(todoSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })


    const onSubmit = (data : FormValues) => {

        if (data.title.trim() && data.description.trim()) {
            const newTask: Task = {
                id: Date.now(),
                title: data.title,
                description: data.description,
                completed: false,
                createdAt: new Date(),
            };
            addTask(newTask);
            console.log(newTask);
        }

    };




    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Title</FormLabel>
                            <FormControl>
                                <Input className= "bg-white-200" placeholder="Add title here" {...field} />
                            </FormControl>
                            <FormDescription>
                                {/*This is the title of your task*/}
                            </FormDescription>
                            <FormMessage>
                                {form.formState.errors.title?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input className= "bg-white-200" placeholder="Add description here" {...field} />
                            </FormControl>
                            <FormDescription>
                                {/*Enter the description of your task.*/}
                            </FormDescription>
                            <FormMessage>
                                {form.formState.errors.description?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}