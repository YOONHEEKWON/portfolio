import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-foreground">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-xl border-2 border-foreground bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-accent hover:text-accent-muted"
                        aria-label={`${exp.company} 사이트`}
                      >
                        ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-accent-muted">{exp.role}</p>
                </div>
                <div className="text-right text-sm text-foreground-muted">
                  <p>{exp.period}</p>
                  <p>{exp.duration}</p>
                  {exp.participation != null && (
                    <p className="mt-1 font-medium text-accent">
                      {typeof exp.participation === "number"
                        ? `참여도 ${exp.participation}%`
                        : exp.participation}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background-muted px-2 py-0.5 text-xs text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
