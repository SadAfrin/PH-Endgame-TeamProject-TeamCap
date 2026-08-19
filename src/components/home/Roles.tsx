import { roles } from "@/data/home";

export default function Roles() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-2xl font-medium md:text-3xl">
        Built around who&apos;s using it
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ink/65">
        One platform, four distinct views. Nobody wades through a dashboard
        meant for someone else&apos;s job.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r) => (
          <div key={r.label} className="rounded-lg border border-ink/10 p-5">
            <p className="font-display text-lg font-medium text-chalk">
              {r.label}
            </p>
            <p className="mt-1.5 text-sm text-ink/60">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}