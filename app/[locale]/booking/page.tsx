import { supabase_browser_client } from '@/@/lib/supabaseClient';
import React from 'react'

const BookingPage = async () => {
    const { data: { session } } = await supabase_browser_client.auth.getSession()

    const user = session?.user;

    if (!user) return;
    return (
        <div>BookingPage</div>
    )
}

export default BookingPage;
