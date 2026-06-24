import { profile, education, certifications } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-foreground">Contact</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-foreground bg-surface text-accent">
                  ✉
                </span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-foreground bg-surface text-accent">
                  ☎
                </span>
                {profile.phone}
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-foreground bg-surface text-accent">
                  ⌖
                </span>
                {profile.location}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground-muted">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="rounded-lg border-2 border-foreground bg-surface p-4"
                  >
                    <p className="font-medium text-foreground">{edu.school}</p>
                    {edu.major && (
                      <p className="text-sm text-foreground-muted">
                        {edu.major}
                      </p>
                    )}
                    <p className="text-sm text-foreground-muted">
                      {edu.period} · {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-foreground-muted">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="rounded-lg border-2 border-foreground bg-surface px-3 py-1.5 text-sm text-foreground-muted"
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
