"use client"

import { Button } from '@/@/components/ui/button';
import { Input } from '@/@/components/ui/input';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string,
    image: FormData,
};

export const GalleryUploadsForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {

        console.log("data", data) // watch input value by passing the name of it
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' flex items-center justify-between gap-10'>
                <Input label='Title' defaultValue="test" {...register("title")} />
                <Input label='Upload Image' type='file' {...register("image", { required: true })} />

            </div>
            <Button type="submit" className=' mt-5'>Submit</Button>
        </form>
    )

}
