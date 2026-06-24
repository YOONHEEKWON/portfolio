import { profile } from "@/data/resume";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-background-dark py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-foreground-inverse-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <VisitorCounter />
          <p className="text-sm text-foreground-inverse-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
