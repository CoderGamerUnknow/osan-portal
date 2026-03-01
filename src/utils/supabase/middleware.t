import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Common hacker scanning paths
const TRAP_PATHS = [
    '/phpmyadmin',
    '/wp-admin',
    '/wp-login.php',
    '/.env',
    '/.git/config',
    '/config.backup',
    '/admin/config.php'
];

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    // 1. Check for Hacker Traps (Honeypot paths)
    const isTrapPath = TRAP_PATHS.some(path => request.nextUrl.pathname.toLowerCase().startsWith(path));
    if (isTrapPath) {
        // In a real scenario, we would log this IP to Supabase `security_logs` & `banned_ips` tables
        // For now, we simulate the ban and just return a 403 Forbidden
        console.warn(`[SECURITY] Trap triggered by IP: ${(request.ip || request.headers.get("x-forwarded-for") || "unknown")} on path: ${request.nextUrl.pathname}`);

        // We could call a Supabase Edge function here to handle the ban logic asynchronously
        // fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/ban-ip`, { method: 'POST', ... })

        return new NextResponse('Forbidden: Access Denied. Your IP has been flagged for abnormal activity.', { status: 403 });
    }

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // 2. Protect /community-dashboard route (require user to be logged in)
    if (
        !user &&
        request.nextUrl.pathname.startsWith('/community-dashboard')
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    // 3. Admin Gateway Protection Logic
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Check if the request includes the admin secret key (e.g., via query param or cookie)
        // For extreme security, we simply return a 404 (Not Found) to unauthorized users
        // rather than a 403 or redirect, making the /admin route invisible to scanners.

        const adminKey = process.env.ADMIN_SECRET_KEY;
        const providedKey = request.cookies.get('admin_secret')?.value || request.nextUrl.searchParams.get('key');

        if (!user || providedKey !== adminKey) {
            console.warn(`[SECURITY] Unauthorized access attempt to /admin by user: ${user?.id || 'anonymous'}`);

            // Return 404 to obscure the existence of the admin panel
            const url = request.nextUrl.clone()
            url.pathname = '/404'
            return NextResponse.rewrite(url)
        }

        // TODO: Verify user role in `profiles` table is `is_admin = true`
        // const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single();
        // if (!profile?.is_admin) { ... return 404 ... }
    }

    return supabaseResponse
}
