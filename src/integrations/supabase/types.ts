export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      banners: {
        Row: {
          active: boolean
          body: string | null
          ends_at: string | null
          headline: string
          id: string
          image_path: string | null
          product_id: string | null
          starts_at: string | null
        }
        Insert: {
          active?: boolean
          body?: string | null
          ends_at?: string | null
          headline: string
          id?: string
          image_path?: string | null
          product_id?: string | null
          starts_at?: string | null
        }
        Update: {
          active?: boolean
          body?: string | null
          ends_at?: string | null
          headline?: string
          id?: string
          image_path?: string | null
          product_id?: string | null
          starts_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "banners_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      collections: {
        Row: {
          cover_path: string | null
          description: string | null
          id: string
          sort_order: number
          title: string
        }
        Insert: {
          cover_path?: string | null
          description?: string | null
          id?: string
          sort_order?: number
          title: string
        }
        Update: {
          cover_path?: string | null
          description?: string | null
          id?: string
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      content_items: {
        Row: {
          cover_path: string | null
          description: string | null
          downloadable: boolean
          id: string
          is_bonus: boolean
          is_new: boolean
          kind: string
          pages: number
          pdf_path: string | null
          product_id: string
          title: string
          topic: string | null
          updated_at: string
        }
        Insert: {
          cover_path?: string | null
          description?: string | null
          downloadable?: boolean
          id?: string
          is_bonus?: boolean
          is_new?: boolean
          kind?: string
          pages?: number
          pdf_path?: string | null
          product_id: string
          title: string
          topic?: string | null
          updated_at?: string
        }
        Update: {
          cover_path?: string | null
          description?: string | null
          downloadable?: boolean
          id?: string
          is_bonus?: boolean
          is_new?: boolean
          kind?: string
          pages?: number
          pdf_path?: string | null
          product_id?: string
          title?: string
          topic?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      entitlements: {
        Row: {
          active: boolean
          created_at: string
          id: string
          product_id: string
          source: string
          user_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: string
          product_id: string
          source?: string
          user_id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: string
          product_id?: string
          source?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entitlements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          content_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          content_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          content_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "content_items"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          read_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      product_recommendations: {
        Row: {
          audience_product_id: string | null
          excludes_product_id: string | null
          id: string
          lifetime_only: boolean
          product_id: string
          sort_order: number
        }
        Insert: {
          audience_product_id?: string | null
          excludes_product_id?: string | null
          id?: string
          lifetime_only?: boolean
          product_id: string
          sort_order?: number
        }
        Update: {
          audience_product_id?: string | null
          excludes_product_id?: string | null
          id?: string
          lifetime_only?: boolean
          product_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_recommendations_audience_product_id_fkey"
            columns: ["audience_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_recommendations_excludes_product_id_fkey"
            columns: ["excludes_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_recommendations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean
          badge: string | null
          banner_path: string | null
          category_id: string | null
          checkout_url: string | null
          collection_id: string | null
          cover_path: string | null
          created_at: string
          description: string | null
          featured: boolean
          id: string
          previous_price_cents: number | null
          price_cents: number
          sort_order: number
          title: string
        }
        Insert: {
          active?: boolean
          badge?: string | null
          banner_path?: string | null
          category_id?: string | null
          checkout_url?: string | null
          collection_id?: string | null
          cover_path?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          previous_price_cents?: number | null
          price_cents?: number
          sort_order?: number
          title: string
        }
        Update: {
          active?: boolean
          badge?: string | null
          banner_path?: string | null
          category_id?: string | null
          checkout_url?: string | null
          collection_id?: string | null
          cover_path?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          previous_price_cents?: number | null
          price_cents?: number
          sort_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      progress: {
        Row: {
          content_id: string
          page: number
          updated_at: string
          user_id: string
        }
        Insert: {
          content_id: string
          page?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          content_id?: string
          page?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "progress_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "content_items"
            referencedColumns: ["id"]
          },
        ]
      }
      purchases: {
        Row: {
          external_reference: string | null
          id: string
          product_id: string
          purchased_at: string
          status: string
          user_id: string
        }
        Insert: {
          external_reference?: string | null
          id?: string
          product_id: string
          purchased_at?: string
          status?: string
          user_id: string
        }
        Update: {
          external_reference?: string | null
          id?: string
          product_id?: string
          purchased_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchases_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      updates: {
        Row: {
          body: string | null
          created_at: string
          id: string
          kind: string
          product_id: string | null
          title: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          kind: string
          product_id?: string | null
          title: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          kind?: string
          product_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "updates_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
