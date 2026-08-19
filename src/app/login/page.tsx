"use client";

import { useState } from "react";
import Link from "next/link";

const roles = [
  { id: "admin", label: "Admin" },
  { id: "teacher", label: "Teacher" },
  { id: "student", label: "Student" },
  { id: "parent", label: "Parent" },
] as const;

type RoleId = (typeof roles)[number]["id"];

export default function LoginPage() {
  const [activeRole, setActiveRole] = useState<RoleId>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setError("");
    // Hook up to your auth flow here.
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment px-6 py-16 text-ink">
      <div className="w-full max-w-sm">
        <Link href="/" className="font-display text-xl font-medium tracking-tight">
          EduJira
        </Link>

        <h1 className="mt-8 font-display text-2xl font-medium">Sign in</h1>
        <p className="mt-1 text-sm text-ink/60">
          Choose your role, then enter your details.
        </p>

        {/* Role selector */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveRole(r.id)}
              aria-pressed={activeRole === r.id}
              className={`rounded-md border px-2 py-2 text-xs font-medium transition-colors ${
                activeRole === r.id
                  ? "border-chalk bg-chalk text-parchment"
                  : "border-ink/15 text-ink/70 hover:border-ink/30"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@school.edu"
              className="w-full rounded-md border border-ink/20 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-chalk"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-ink/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-md border border-ink/20 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-chalk"
            />
          </div>

          {error && (
            <p className="text-xs text-pen" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-ink py-2.5 text-sm font-medium text-parchment hover:bg-ink-light"
          >
            Sign in as {roles.find((r) => r.id === activeRole)?.label}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-ink/50">
          Trouble signing in? Contact your school administrator.
        </p>
      </div>
    </div>
  );
}