import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from("likes").select('likes').eq('projName', 'test');
    if (error) return error;
    else {
        return {
            returnData: data ?? [],
        };
    }
    
} 