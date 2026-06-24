import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background-dark px-6 pt-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {profile.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1 text-sm text-accent"
            >
              {keyword}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground-inverse sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mb-2 text-xl text-accent sm:text-2xl">{profile.role}</p>

        <p className="mx-auto mb-8 max-w-2xl text-base text-foreground-inverse-muted sm:text-lg">
          {profile.summary}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3 text-sm text-foreground-inverse-muted">
          <span>{profile.totalExperience} 경력</span>
          <span className="text-border-dark">·</span>
          <span>{profile.location}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-foreground-inverse transition-colors hover:bg-accent-muted"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
