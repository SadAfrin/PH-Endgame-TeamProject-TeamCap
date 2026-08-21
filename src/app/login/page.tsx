import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Sign In | EduJira",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e7]">
      {/* Navbar - same as register page */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-[#e5ddc9]">
        <span className="font-serif text-xl text-[#1f2a44]">EduJira</span>
        <div className="hidden sm:flex items-center gap-8 text-[#1f2a44]">
          <Link href="/features">Features</Link>
          <Link href="/who-its-for">Who it&apos;s for</Link>
          <Link href="/about">About</Link>
        </div>
        <Link
          href="/register"
          className="border border-[#1f2a44] text-[#1f2a44] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#1f2a44] hover:text-white transition"
        >
          Sign up
        </Link>
      </nav>

      <main className="flex justify-center px-6 py-20">
        <LoginForm />
      </main>
    </div>
  );
}