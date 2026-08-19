import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl font-medium tracking-tight">
          EduJira
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          <Link href="/programs" className="hover:text-ink">
            Features
          </Link>
          <a href="#roles" className="hover:text-ink">
            Who it&apos;s for
          </a>
          <a href="#about" className="hover:text-ink">
            About
          </a>
        </nav>
        <Link
          href="/login"
          className="rounded-md border border-ink/20 px-4 py-2 text-sm font-medium hover:border-ink/40"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}