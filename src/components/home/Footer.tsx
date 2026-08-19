import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-ink/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} EduJira. Built for schools.</p>
        <div className="flex gap-6">
          <Link href="/programs" className="hover:text-ink">
            Features
          </Link>
          <Link href="/login" className="hover:text-ink">
            Sign in
          </Link>
        </div>
      </div>
    </footer>
  );
}