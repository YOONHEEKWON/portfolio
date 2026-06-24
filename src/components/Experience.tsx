import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-colors hover:border-slate-700"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.company}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-400 hover:text-blue-300"
                        aria-label={`${exp.company} 사이트`}
                      >
                        ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-blue-400">{exp.role}</p>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <p>{exp.period}</p>
                  <p>{exp.duration}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
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
