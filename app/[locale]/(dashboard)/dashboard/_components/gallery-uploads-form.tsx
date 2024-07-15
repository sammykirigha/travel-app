"use client"

import { Button } from '@/@/components/ui/button';
import { Input } from '@/@/components/ui/input';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';

type Inputs = {
    title: string,
    image: FileList,
};

export const GalleryUploadsForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isLoading, isSubmitting }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        let formData = new FormData();

        formData.append("title", data.title);
        formData.append("image", data.image[0]);

        try {
            let res = await fetch("/api/uploads", {
                method: "POST",
                body: formData,
            });

            if (res?.status === 201) {
                toast.error("A File Document was created successfully");
            }
        } catch (error) {

        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' flex items-center justify-between gap-10'>
                <Input label='Title' defaultValue="test" {...register("title")} />
                <Input label='Upload Image' type='file' {...register("image", { required: true })} />

            </div>
            <Button type="submit" disabled={isSubmitting} className=' mt-5'>
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </form>
    )

}
