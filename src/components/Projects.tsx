import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/30"
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-blue-300"
                      aria-label={`${project.title} 사이트`}
                    >
                      ↗
                    </a>
                  )}
                </h3>
                <p className="text-sm text-slate-500">{project.company}</p>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
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
