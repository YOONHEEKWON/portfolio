import { about } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold text-foreground">About</h2>
        <p className="mb-12 max-w-3xl text-foreground-muted">{about.intro}</p>

        <div className="grid gap-6 sm:grid-cols-3">
          {about.traits.map((trait) => (
            <div
              key={trait.title}
              className="rounded-xl border-2 border-foreground bg-surface p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-accent">
                {trait.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {trait.description}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 rounded-xl border-2 border-foreground bg-background-muted p-8">
          <p className="text-base leading-relaxed text-foreground-muted italic">
            &ldquo;{about.philosophy}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
