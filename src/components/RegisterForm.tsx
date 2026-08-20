"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Role = "admin" | "teacher" | "student" | "parent";

const roles: { label: string; value: Role }[] = [
  { label: "Admin", value: "admin" },
  { label: "Teacher", value: "teacher" },
  { label: "Student", value: "student" },
  { label: "Parent", value: "parent" },
];

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const checkForm = () => {
    const newErrors: Errors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";

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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!data.success) {
        setErrors({ form: data.message || "Registration failed" });
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      console.log(err);
      setErrors({ form: "Something went wrong, try again" });
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="font-serif text-4xl text-[#1f2a44] mb-1">EduJira</h1>

      <h2 className="font-serif text-3xl text-[#1f2a44] mt-8">Create account</h2>
      <p className="text-[#6b6459] mt-1 mb-6">Choose your role, then fill in your details.</p>

      {errors.form && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3 mb-4">
          {errors.form}
        </div>
      )}

      {/* Role tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {roles.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRole(r.value)}
            className={`px-5 py-2 rounded-md border text-sm font-medium transition ${
              role === r.value
                ? "bg-[#2f5233] border-[#2f5233] text-white"
                : "bg-transparent border-[#d8d0bd] text-[#1f2a44] hover:border-[#1f2a44]"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-[#1f2a44] mb-1.5">Full name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Your full name"
            className={`w-full bg-white border rounded-md px-4 py-3 text-[#1f2a44] placeholder:text-[#a8a094] focus:outline-none focus:ring-1 ${
              errors.name ? "border-red-400 focus:ring-red-300" : "border-[#d8d0bd] focus:ring-[#1f2a44]"
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm text-[#1f2a44] mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="name@school.edu"
            className={`w-full bg-white border rounded-md px-4 py-3 text-[#1f2a44] placeholder:text-[#a8a094] focus:outline-none focus:ring-1 ${
              errors.email ? "border-red-400 focus:ring-red-300" : "border-[#d8d0bd] focus:ring-[#1f2a44]"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm text-[#1f2a44] mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: undefined });
            }}
            placeholder="Enter your password"
            className={`w-full bg-white border rounded-md px-4 py-3 text-[#1f2a44] placeholder:text-[#a8a094] focus:outline-none focus:ring-1 ${
              errors.password ? "border-red-400 focus:ring-red-300" : "border-[#d8d0bd] focus:ring-[#1f2a44]"
            }`}
          />
          {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm text-[#1f2a44] mb-1.5">Confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
            }}
            placeholder="Re-enter your password"
            className={`w-full bg-white border rounded-md px-4 py-3 text-[#1f2a44] placeholder:text-[#a8a094] focus:outline-none focus:ring-1 ${
              errors.confirmPassword ? "border-red-400 focus:ring-red-300" : "border-[#d8d0bd] focus:ring-[#1f2a44]"
            }`}
          />
          {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1f2a44] hover:bg-[#161d31] text-white font-semibold rounded-md py-3.5 transition disabled:opacity-60"
        >
          {loading ? "Creating account..." : `Sign up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
        </button>
      </form>

      <p className="text-center text-[#6b6459] text-sm mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-[#1f2a44] font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}