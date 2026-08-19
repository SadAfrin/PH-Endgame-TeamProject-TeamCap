export default function AboutSection() {
  return (
    <section id="about" className="border-t border-ink/10 bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-medium md:text-3xl">
          Made for the education sector
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-parchment/70">
          EduJira is built for schools looking to move off paper registers
          and scattered spreadsheets, reducing manual work for admins and
          teachers while giving parents real visibility into their
          child&apos;s progress.
        </p>
      </div>
    </section>
  );
}