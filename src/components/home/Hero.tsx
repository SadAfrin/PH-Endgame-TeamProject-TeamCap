import Link from "next/link";
import ReportCardWidget from "./ReportCardWidget";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="mb-4 font-data text-xs uppercase tracking-[0.15em] text-chalk">
          Smart school management
        </p>
        <h1 className="font-display text-4xl leading-[1.15] font-medium md:text-5xl">
          Every student&apos;s record, kept the way it deserves.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
          EduJira centralizes attendance, grades, notices, and scheduling for
          your school, with AI that catches what a spreadsheet never will.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/programs"
            className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-parchment hover:bg-ink-light"
          >
            Explore features
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-ink/20 px-5 py-3 text-sm font-medium hover:border-ink/40"
          >
            Sign in to your portal
          </Link>
        </div>
      </div>

      <ReportCardWidget />
    </section>
  );
}