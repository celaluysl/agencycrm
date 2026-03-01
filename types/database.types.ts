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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          balance: number
          client_logo: string | null
          client_name: string
          created_at: string
          credit: number
          debit: number
          health_score: number
          id: string
          last_payment_date: string | null
          payment_status: Database["public"]["Enums"]["payment_status_enum"]
        }
        Insert: {
          balance?: number
          client_logo?: string | null
          client_name: string
          created_at?: string
          credit?: number
          debit?: number
          health_score?: number
          id?: string
          last_payment_date?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Update: {
          balance?: number
          client_logo?: string | null
          client_name?: string
          created_at?: string
          credit?: number
          debit?: number
          health_score?: number
          id?: string
          last_payment_date?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Relationships: []
      }
      employees: {
        Row: {
          avatar: string | null
          base_salary: number
          bonus: number
          created_at: string
          deductions: number
          department: Database["public"]["Enums"]["department_enum"]
          email: string
          hire_date: string
          id: string
          initials: string
          name: string
          net_pay: number
          position: string
          status: Database["public"]["Enums"]["payment_status_enum"]
        }
        Insert: {
          avatar?: string | null
          base_salary?: number
          bonus?: number
          created_at?: string
          deductions?: number
          department: Database["public"]["Enums"]["department_enum"]
          email: string
          hire_date: string
          id?: string
          initials: string
          name: string
          net_pay?: number
          position: string
          status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Update: {
          avatar?: string | null
          base_salary?: number
          bonus?: number
          created_at?: string
          deductions?: number
          department?: Database["public"]["Enums"]["department_enum"]
          email?: string
          hire_date?: string
          id?: string
          initials?: string
          name?: string
          net_pay?: number
          position?: string
          status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          created_at: string
          description: string
          id: string
          invoice_id: string
          quantity: number
          total: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          quantity?: number
          total: number
          unit_price: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          total?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          client_id: string
          created_at: string
          due_date: string
          id: string
          invoice_number: string
          issue_date: string
          paid_date: string | null
          reminder_sent: boolean
          status: Database["public"]["Enums"]["payment_status_enum"]
        }
        Insert: {
          amount: number
          client_id: string
          created_at?: string
          due_date: string
          id?: string
          invoice_number: string
          issue_date: string
          paid_date?: string | null
          reminder_sent?: boolean
          status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Update: {
          amount?: number
          client_id?: string
          created_at?: string
          due_date?: string
          id?: string
          invoice_number?: string
          issue_date?: string
          paid_date?: string | null
          reminder_sent?: boolean
          status?: Database["public"]["Enums"]["payment_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          company_name: string
          contact_person: string
          created_at: string
          email: string
          id: string
          last_contact: string | null
          notes: string | null
          phone: string | null
          potential_value: number
          source: Database["public"]["Enums"]["lead_source_enum"]
          status: Database["public"]["Enums"]["lead_status_enum"]
        }
        Insert: {
          assigned_to?: string | null
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          id?: string
          last_contact?: string | null
          notes?: string | null
          phone?: string | null
          potential_value?: number
          source: Database["public"]["Enums"]["lead_source_enum"]
          status?: Database["public"]["Enums"]["lead_status_enum"]
        }
        Update: {
          assigned_to?: string | null
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          id?: string
          last_contact?: string | null
          notes?: string | null
          phone?: string | null
          potential_value?: number
          source?: Database["public"]["Enums"]["lead_source_enum"]
          status?: Database["public"]["Enums"]["lead_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_content: {
        Row: {
          caption: string
          client_id: string
          created_at: string
          id: string
          media_url: string
          platforms: Database["public"]["Enums"]["social_media_platform_enum"][]
          revision_quota_total: number
          revision_quota_used: number
          scheduled_date: string
          status: Database["public"]["Enums"]["content_approval_status_enum"]
          thumbnail_url: string | null
          type: Database["public"]["Enums"]["content_type_enum"]
        }
        Insert: {
          caption: string
          client_id: string
          created_at?: string
          id?: string
          media_url: string
          platforms: Database["public"]["Enums"]["social_media_platform_enum"][]
          revision_quota_total?: number
          revision_quota_used?: number
          scheduled_date: string
          status?: Database["public"]["Enums"]["content_approval_status_enum"]
          thumbnail_url?: string | null
          type: Database["public"]["Enums"]["content_type_enum"]
        }
        Update: {
          caption?: string
          client_id?: string
          created_at?: string
          id?: string
          media_url?: string
          platforms?: Database["public"]["Enums"]["social_media_platform_enum"][]
          revision_quota_total?: number
          revision_quota_used?: number
          scheduled_date?: string
          status?: Database["public"]["Enums"]["content_approval_status_enum"]
          thumbnail_url?: string | null
          type?: Database["public"]["Enums"]["content_type_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "social_media_content_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      sop_items: {
        Row: {
          created_at: string
          id: string
          is_completed: boolean
          order: number
          task_id: string
          text: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_completed?: boolean
          order?: number
          task_id: string
          text: string
        }
        Update: {
          created_at?: string
          id?: string
          is_completed?: boolean
          order?: number
          task_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "sop_items_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_activities: {
        Row: {
          content: string
          id: string
          task_id: string
          timestamp: string
          type: string
          user_id: string
        }
        Insert: {
          content: string
          id?: string
          task_id: string
          timestamp?: string
          type: string
          user_id: string
        }
        Update: {
          content?: string
          id?: string
          task_id?: string
          timestamp?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_activities_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      task_time_sessions: {
        Row: {
          created_at: string
          duration: number
          end_time: string | null
          id: string
          start_time: string
          task_id: string
        }
        Insert: {
          created_at?: string
          duration?: number
          end_time?: string | null
          id?: string
          start_time: string
          task_id: string
        }
        Update: {
          created_at?: string
          duration?: number
          end_time?: string | null
          id?: string
          start_time?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_time_sessions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to: string | null
          client_id: string | null
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          priority: Database["public"]["Enums"]["priority_enum"]
          start_date: string | null
          status: Database["public"]["Enums"]["task_status_enum"]
          title: string
        }
        Insert: {
          assigned_to?: string | null
          client_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["priority_enum"]
          start_date?: string | null
          status?: Database["public"]["Enums"]["task_status_enum"]
          title: string
        }
        Update: {
          assigned_to?: string | null
          client_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["priority_enum"]
          start_date?: string | null
          status?: Database["public"]["Enums"]["task_status_enum"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
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
      content_approval_status_enum:
        | "pending"
        | "approved"
        | "revision_requested"
        | "rejected"
      content_type_enum: "image" | "video" | "carousel"
      department_enum:
        | "Yazılım"
        | "Tasarım"
        | "Müşteri İlişkileri"
        | "Pazarlama"
        | "İçerik"
        | "Yönetim"
      lead_source_enum: "linkedin" | "referral" | "website" | "email" | "ads"
      lead_status_enum:
        | "new"
        | "contacted"
        | "proposal_sent"
        | "potential"
        | "won"
        | "lost"
      payment_status_enum:
        | "paid"
        | "pending"
        | "bank_instruction_ready"
        | "overdue"
        | "current"
      priority_enum: "low" | "medium" | "high" | "urgent"
      social_media_platform_enum:
        | "instagram"
        | "facebook"
        | "tiktok"
        | "linkedin"
        | "twitter"
      task_status_enum: "not_started" | "in_progress" | "completed"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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
      content_approval_status_enum: [
        "pending",
        "approved",
        "revision_requested",
        "rejected",
      ],
      content_type_enum: ["image", "video", "carousel"],
      department_enum: [
        "Yazılım",
        "Tasarım",
        "Müşteri İlişkileri",
        "Pazarlama",
        "İçerik",
        "Yönetim",
      ],
      lead_source_enum: ["linkedin", "referral", "website", "email", "ads"],
      lead_status_enum: [
        "new",
        "contacted",
        "proposal_sent",
        "potential",
        "won",
        "lost",
      ],
      payment_status_enum: [
        "paid",
        "pending",
        "bank_instruction_ready",
        "overdue",
        "current",
      ],
      priority_enum: ["low", "medium", "high", "urgent"],
      social_media_platform_enum: [
        "instagram",
        "facebook",
        "tiktok",
        "linkedin",
        "twitter",
      ],
      task_status_enum: ["not_started", "in_progress", "completed"],
    },
  },
} as const
