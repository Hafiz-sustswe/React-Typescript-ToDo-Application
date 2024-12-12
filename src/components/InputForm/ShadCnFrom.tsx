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
        const trimmedTitle = data.title.trim();
        const trimmedDescription = data?.description.trim() ;

        if (trimmedTitle ) {
            const newTask: Task = {
                id: Date.now(),
                title: trimmedTitle,
                description: trimmedDescription,
                completed: false,
                createdAt: new Date(),
            };
            addTask(newTask);
            console.log(newTask);
            form.setValue('title', "");
            form.setValue('description', "");
        }


    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="min-h-[100]">
                            <FormLabel >Title</FormLabel>
                            <FormControl>
                                <Input  className= "bg-white-200 border-gray-300 rounded-md p-2 text-sm  overflow-y-auto resize-none focus:border-black focus:ring-1 focus:ring-black" placeholder="Add title here" {...field} />
                            </FormControl>
                            <FormDescription>
                                {/*This is the title of your task*/}
                            </FormDescription>
                            <FormMessage className="text-red-500" >
                                {form.formState.errors.title?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="min-h-[100]">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                    <textarea
                                        {...field}
                                        aria-multiline="true"
                                        className="w-full bg-white-200 border border-gray-300 rounded-md p-2 text-sm h-20 overflow-y-auto resize-none focus:border-black focus:ring-1 focus:ring-black"
                                        placeholder="Add description here"
                                    />
                            </FormControl>
                            <FormDescription>
                                {/* You can add additional helpful text here if necessary. */}
                            </FormDescription>
                            <FormMessage className="text-red-500">
                                {form.formState.errors.description?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-500 hover:text-green-500 transition-colors"
                >
                    Submit
                </Button>

            </form>
        </Form>
    )
}