export type Role = "admin" | "teacher" | "student" | "parent";

export interface LoginData {
  email: string;
  password: string;
  role: Role;
}

export interface FormErrors {
  email?: string;
  password?: string;
  role?: string;
  form?: string;
}