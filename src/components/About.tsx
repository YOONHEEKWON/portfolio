import { about } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold text-white">About</h2>
        <p className="mb-12 max-w-3xl text-slate-400">{about.intro}</p>

        <div className="grid gap-6 sm:grid-cols-3">
          {about.traits.map((trait) => (
            <div
              key={trait.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-blue-400">
                {trait.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {trait.description}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 rounded-xl border border-slate-800 bg-slate-900/30 p-8">
          <p className="text-base leading-relaxed text-slate-300 italic">
            &ldquo;{about.philosophy}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
