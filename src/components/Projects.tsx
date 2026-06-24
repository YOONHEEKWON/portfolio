import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background-dark">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-foreground-inverse">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-accent"
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-foreground-inverse">
                  {project.title}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-accent opacity-0 transition-opacity group-hover:opacity-100 hover:text-accent-muted"
                      aria-label={`${project.title} 사이트`}
                    >
                      ↗
                    </a>
                  )}
                </h3>
                <p className="text-sm text-foreground-inverse-muted">
                  {project.company}
                  {project.participation != null && (
                    <span className="ml-2 text-accent">
                      ·{" "}
                      {typeof project.participation === "number"
                        ? `참여도 ${project.participation}%`
                        : project.participation}
                    </span>
                  )}
                </p>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground-inverse-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-dark bg-background-dark px-2 py-0.5 text-xs text-foreground-inverse-muted"
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
