import { skills } from "@/data/resume";

const categoryLabels: Record<string, string> = {
  core: "Core",
  framework: "Framework & Library",
  tool: "Tools",
  specialty: "Specialty",
};

const categoryOrder = ["core", "framework", "tool", "specialty"];

export default function Skills() {
  const grouped = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    items: skills.filter((s) => s.category === category),
  }));

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {grouped.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill.name}
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
