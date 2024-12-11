import * as yup from "yup";

export const todoSchema = yup.object({
    title: yup
        .string()
        .min(3, "Title must be at least 3 characters.")
        .max(50, "Title must not exceed 50 characters.")
        .matches(/^[^\d]/, "Title must not start with a number.")
        .matches(/^[a-zA-Z0-9\s]+$/, "Title can only contain letters, numbers, and spaces.")
        .required("Title is required."),
    description: yup
        .string()
        .min(10, "Description must be at least 10 characters.")
        .max(300, "Description must not exceed 300 characters.")
        .matches(/^[a-zA-Z0-9\s.,!?"'-]+$/, "Description can only contain valid characters like letters, numbers, and punctuation.")
        .optional(), // Make it optional if you want to allow empty descriptions
});
