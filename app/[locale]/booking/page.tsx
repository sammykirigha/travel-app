"use client"
import { supabase_browser_client } from '@/@/lib/supabaseClient';
import React from 'react'

const BookingPage =  () => {
    supabase_browser_client.auth.getSession().then((data) => {
        console.log('====================================');
        console.log("session",data?.data?.session);
        console.log('====================================');
    })

    // const user = session?.user;

    // if (!user) return;

    return (
        <div className=' bg-white h-screen'>BookingPage</div>
    )
}

export default BookingPage;
