"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const supabase = await createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        redirect(`/login?error=${error.message}`);
    }

    revalidatePath("/community-dashboard", "layout");
    redirect("/community-dashboard");
}

export async function signup(formData: FormData) {
    const supabase = await createClient();

    // Honeypot check (hidden field to catch bots)
    const usernameHoneypot = formData.get("username") as string;
    if (usernameHoneypot) {
        // Silently ignore bots
        redirect("/login?message=Account created successfully");
    }

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const city = formData.get("city") as string;
    const blood_group = formData.get("blood_group") as string;

    // Sign up the user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        redirect(`/signup?error=${error.message}`);
    }

    // Next steps:
    // Trigger would ideally insert into `profiles` table automatically on Auth signup,
    // or we can insert directly if trigger isn't ready.
    if (data.user) {
        const { error: profileError } = await supabase.from('profiles').insert({
            id: data.user.id,
            name,
            whatsapp,
            city,
            blood_group,
            status: 'Pending',
            is_blood_donor: formData.get("is_blood_donor") === "on",
        });

        if (profileError) {
            // In a robust flow, handle partial failure.
            console.error(profileError);
        }
    }

    // Redirect to login with pending message
    redirect("/login?message=Registration successful. Awaiting admin approval.");
}

export async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
}
