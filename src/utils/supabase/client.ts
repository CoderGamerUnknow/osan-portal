import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    'https://gryelywdzymbtfhrjxry.supabase.co',
    'sb_publishable_jgm6xd9pywmFRhp8aKxa-A_K9NRA7LJ'
  )
}
