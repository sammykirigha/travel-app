"use client"

import { Button } from '@/@/components/ui/button';
import { Input } from '@/@/components/ui/input';
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Link from 'next/link';
import { Card, CardContent } from '@/@/components/ui/card';
import { registerWithEmailAndPasword } from '@/@/actions/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import { Provider } from '@supabase/supabase-js';
import { supabase_browser_client } from '@/@/lib/supabaseClient';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/@/components/ui/form';
import { formSchema } from '@/@/lib/validations/formSchema';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type Inputs = {
    email: string,
    password: string
};

const SignUpForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async (values: z.infer<typeof formSchema>) => {
        const response = await registerWithEmailAndPasword({ email: values.email, password: values.password })
        const { data, error } = JSON.parse(response);

        if(!error){
            router.push("/booking")
          }
    };

    async function handleGoogleSignIn(provider: Provider) {
        const res = await supabase_browser_client.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/api/auth/callback`,
            },
        });
    }

    return (
        <div className=' w-full h-screen flex items-center justify-center pt-10 bg-white  '>
            <Card className='w-full max-w-[500px]'>
                <CardContent>
                    <div className="flex w-full flex-col items-center justify-center py-5 mx-auto rounded-lg   ">
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className=' text-3xl font-[600]'>SignUp </h2>
                        </div>
                        <div className="flex mt-2 w-full">
                            <Button onClick={() => handleGoogleSignIn('google')} className=' flex items-center justify-center gap-5 font-[500]' variant="outline">
                                <FcGoogle />
                                SignUp with Google
                            </Button>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className=' w-full m-3 '>
                                <div className=' w-full flex flex-col gap-5'>
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='email' {...field} />
                                                </FormControl>
                                                <FormDescription>Please enter your email</FormDescription>
                                                <FormMessage />
                                            </FormItem>

                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='password' {...field} type='password' />
                                                </FormControl>
                                                <FormDescription>Please enter your Password</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type='submit' disabled={form.formState.isSubmitting} className='px-8  mt-5 py-1 my-1'>
                                        {
                                            form.formState.isSubmitting ? (
                                                <FaSpinner size={16} className="animate-spin" />
                                            ) : "Submit"
                                        }
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <div className="flex w-full items-center justify-center">
                            <p className=' text-sm flex gap-1'>Already have an account? <Link href={"/auth/login"} className='text-[#ff5722] flex gap-1 cursor-pointer'>Login here <FaArrowUpRightFromSquare /></Link> </p>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUpForm
