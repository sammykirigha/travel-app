"use client"

import { Button } from '@/@/components/ui/button';
import { Input } from '@/@/components/ui/input';
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox } from '@/@/components/ui/checkbox';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Link from 'next/link';
import { Card, CardContent } from '@/@/components/ui/card';

type Inputs = {
  username: string,
  email: string,
  password: string
};

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className=' w-full h-screen flex items-center justify-center bg-white  '>
      <Card className='w-full max-w-[500px]'>
        <CardContent>
          <div className="flex w-full flex-col items-center justify-center mx-auto rounded-lg   ">
            <div className="flex flex-col gap-2 w-full">
              <h2 className=' text-3xl font-[600]'>Login </h2>
              <p className="text-md font-[500]">Hi, Welcome back 👋</p>
            </div>
            <div className="flex mt-2 w-full">
              <Button className=' flex items-center justify-center gap-5 font-[500]' variant="outline">
                <FcGoogle />
                Login with Google
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' w-full m-3 '>
              <Input type='text' label='Username'  {...register("username")} />
              <Input type='text' label='Email' {...register("email", { required: true })} />
              <Input type='password' label='Password' {...register("password", { required: true })} />

              <div className="flex w-full items-center justify-between my-3 px-1">
                <div className="flex gap-2">
                  <Checkbox />
                  <span className=' text-sm font-[400]'>Remember me</span>

                </div>
                <Link href="/" className=' text-md font-[500] text-[#ff5722] underline'>Forgot Password</Link>
              </div>
              <Button className='px-8 py-1 my-1'>Submit</Button>
            </form>

            <div className="flex w-full items-center justify-center">
              <p className=' text-sm flex gap-1'>Not registered yet? <Link href={"auth/signup"} className='text-[#ff5722] flex gap-1 cursor-pointer'>Create an account <FaArrowUpRightFromSquare /></Link> </p>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
