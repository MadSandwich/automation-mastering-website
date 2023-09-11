export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
	public: {
		Tables: {
			users: {
				Row: {
					created_at: string
					email: string | null
					id: number
					password: string | null
					role: string
				}
				Insert: {
					created_at?: string
					email?: string | null
					id?: number
					password?: string | null
					role?: string
				}
				Update: {
					created_at?: string
					email?: string | null
					id?: number
					password?: string | null
					role?: string
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
