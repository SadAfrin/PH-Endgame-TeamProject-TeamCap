"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginData, FormErrors, Role } from "@/types/auth";

const roles: Role[] = ["student", "teacher", "parent", "admin"];

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("student");
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const checkForm = () => {
    const newErrors: FormErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = checkForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role } as LoginData),
      });

      const data = await res.json();

      if (!data.success) {
        setErrors({ form: data.message || "Login failed" });
        setLoading(false);
        return;
      }

      // redirect based on role
      if (role === "admin") router.push("/dashboard/admin");
      else if (role === "teacher") router.push("/dashboard/teacher");
      else if (role === "parent") router.push("/dashboard/parent");
      else router.push("/dashboard/student");

    } catch (err) {
      console.log(err);
      setErrors({ form: "Something went wrong, try again" });
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900 text-center">Welcome back</h1>
      <p className="text-sm text-slate-500 text-center mt-1 mb-6">Sign in to continue</p>

      {errors.form && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">I am a</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="you@school.edu"
            className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-300 focus:ring-indigo-100 focus:border-indigo-500"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <Link href="/forgot-password" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: undefined });
              }}
              placeholder="••••••••"
              className={`w-full border rounded-lg px-3 py-2 pr-14 text-sm focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-400 focus:ring-red-100" : "border-slate-300 focus:ring-indigo-100 focus:border-indigo-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg px-4 py-2.5 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <p className="text-sm text-center text-slate-600">
        New here?{" "}
        <Link href="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
          Create an account
        </Link>
      </p>
    </div>
  );
}