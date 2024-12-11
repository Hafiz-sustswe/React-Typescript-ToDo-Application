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



type FormValues = yup.InferType<typeof todoSchema>;

export function ProfileForm() {

    const form = useForm<FormValues>({
        resolver: yupResolver(todoSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })
    function onSubmit(values: FormValues) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Add title here" {...field} />
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
                                <Input placeholder="Add description here" {...field} />
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