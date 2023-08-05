import { supabase } from '$lib/supabaseClient';


export async function load() {
    const {data} = await supabase.from("userdata").select().eq()
    return {
        userdata: data ?? [];
    };
};

//WIP