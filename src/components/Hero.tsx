import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {profile.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400"
            >
              {keyword}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mb-2 text-xl text-blue-400 sm:text-2xl">
          {profile.role}
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-400 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <span>{profile.totalExperience} 경력</span>
          <span className="text-slate-700">·</span>
          <span>{profile.location}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            연락하기
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}
