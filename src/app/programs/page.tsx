import Link from "next/link";

const aiFeatures = [
  {
    title: "AI early warning system",
    body: "Analyzes grades, attendance, and behavior trends to flag students at risk of failing and alerts teachers and admins in advance.",
  },
  {
    title: "Automated report card narrative generator",
    body: "Automatically generates a personalized, human-readable performance summary for each student's report card.",
  },
  {
    title: "Smart behavior & attendance pattern analyzer",
    body: "Detects unusual attendance or behavioral patterns, like frequent lateness or a sudden drop in attendance, and notifies staff.",
  },
  {
    title: "Multilingual notice translator",
    body: "Automatically translates school notices and announcements into each parent's preferred language.",
  },
  {
    title: "Automated resource & classroom allocation planner",
    body: "Suggests optimal classroom, teacher, and resource allocation based on schedules, capacity, and availability.",
  },
  {
    title: "Automated skill & career growth tracker",
    body: "Tracks academic performance, extracurriculars, and skill development over time to suggest suitable career paths.",
  },
  {
    title: "Virtual assistive learning & tutoring bot",
    body: "An AI-powered chatbot that helps students with homework questions, concept explanations, and study guidance in real time.",
  },
];

const operationsFeatures = [
  {
    title: "Role-based dashboards",
    body: "Separate, customized dashboards for admin, teacher, and student or parent roles, each showing only what's relevant.",
  },
  {
    title: "Digital attendance management",
    body: "Teachers mark and track daily attendance digitally, with automatic summary reports.",
  },
  {
    title: "Result & grade management system",
    body: "Teachers input marks per subject and term; the system calculates final results and generates transcripts.",
  },
  {
    title: "Class routine & timetable management",
    body: "Create, update, and display class schedules for each grade and section, viewable by every role.",
  },
  {
    title: "Role-based leave application workflow",
    body: "Parents submit a digital absence request, with an optional doctor's note upload, directly through their portal.",
  },
];

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-white/50 p-5">
      <h3 className="font-display text-base font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 font-data text-xs uppercase tracking-[0.15em] text-chalk">
          Twelve core features
        </p>
        <h1 className="max-w-2xl font-display text-3xl font-medium leading-tight md:text-4xl">
          Everything a school needs, nothing it doesn&apos;t.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
          EduJira splits into two groups of features: intelligent tools that
          run in the background, and the daily operations every school
          already relies on.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <h2 className="font-display text-xl font-medium text-chalk">
          AI-powered intelligence
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-xl font-medium text-chalk">
          Daily academic operations
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {operationsFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      
    </div>
  );
}