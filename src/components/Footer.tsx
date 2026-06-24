import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-slate-600">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
