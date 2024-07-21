import createClient from '@/@/lib/supabaseServer';
import React from 'react'

const BookingPage = async () => {
    const { data: { session } } = await createClient().auth.getSession()

    const user = session?.user;

    if (!user) return;

    return (
        <div className=' bg-white h-screen'>BookingPage</div>
    )
}

export default BookingPage;
