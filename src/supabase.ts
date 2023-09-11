import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types.ts'

const supabase = createClient<Database>(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_ANON_KEY, {
	auth: {
		autoRefreshToken: true,
		persistSession: false,
		detectSessionInUrl: true,
	},
})

export default supabase
