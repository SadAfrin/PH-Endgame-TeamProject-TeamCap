import Link from "next/link";
import { highlightFeatures } from "@/data/home";

export default function FeatureHighlights() {
  return (
    <section className="border-t border-ink/10 bg-parchment-dark/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            What EduJira handles for you
          </h2>
          <Link
            href="/programs"
            className="hidden text-sm font-medium text-chalk hover:underline md:inline"
          >
            See all 12 features →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-ink/10 bg-white/50 p-5"
            >
              <h3 className="font-display text-base font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/programs"
          className="mt-8 inline-block text-sm font-medium text-chalk hover:underline md:hidden"
        >
          See all 12 features →
        </Link>
      </div>
    </section>
  );
}