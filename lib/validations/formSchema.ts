import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email().min(5, { message: 'Job title must be at least 2 characters' }),
    password: z.string().min(5, { message: "Password should be above 5 characters" }),
});