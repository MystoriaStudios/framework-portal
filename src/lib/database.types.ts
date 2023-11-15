export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          created_at: string
          director: string | null
          id: string
          members: Json | null
          name: string | null
        }
        Insert: {
          created_at?: string
          director?: string | null
          id?: string
          members?: Json | null
          name?: string | null
        }
        Update: {
          created_at?: string
          director?: string | null
          id?: string
          members?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
