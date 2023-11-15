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
      deployments: {
        Row: {
          created_at: string
          id: string
          organization: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          organization?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          organization?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deployments_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          }
        ]
      }
      organizations: {
        Row: {
          api_key: string | null
          created_at: string
          director: string | null
          id: string
          members: string[] | null
          name: string | null
        }
        Insert: {
          api_key?: string | null
          created_at?: string
          director?: string | null
          id?: string
          members?: string[] | null
          name?: string | null
        }
        Update: {
          api_key?: string | null
          created_at?: string
          director?: string | null
          id?: string
          members?: string[] | null
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
      get_organization_from_api_key: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
