import { z } from "zod";

export const formSchema = z.object({
    email: z.string({required_error: "Email must be provided"}).email().min(5, { message: 'Job title must be at least 2 characters' }),
    full_name: z.string({required_error: "Full Name is required"}),
    password: z.string().min(5, { message: "Password should be above 5 characters" }),
});