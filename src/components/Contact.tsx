import { profile, education, certifications } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Contact</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-slate-400">
              
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                  ✉
                </span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                  ☎
                </span>
                {profile.phone}
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                  ⌖
                </span>
                {profile.location}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={profile.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
              >
                Blog
              </a>
              <a
                href={profile.links.codepen}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
              >
                CodePen
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="rounded-lg border border-slate-800 p-4"
                  >
                    <p className="font-medium text-white">{edu.school}</p>
                    {edu.major && (
                      <p className="text-sm text-slate-400">{edu.major}</p>
                    )}
                    <p className="text-sm text-slate-500">
                      {edu.period} · {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="rounded-lg border border-slate-800 px-3 py-1.5 text-sm text-slate-400"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
