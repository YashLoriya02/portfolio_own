const skillCategories = [
  {
    category: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C",
      "Dart",
      "SQL",
      "HTML",
      "CSS",
    ],
    color: "bg-zinc-900/80",
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "React Native",
      "Django",
      "Flask",
      "Tailwind CSS",
    ],
    color: "bg-zinc-900/80",
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, RDS, ECS)",
      "Docker",
      "Terraform",
      "Git",
      "GitHub",
      "Linux",
    ],
    color: "bg-zinc-900/80",
  },
  {
    category: "Tools & Other",
    skills: [
      "MongoDB",
      "WebSocket",
      "Figma",
      "Web Scraping",
      "ShadCN",
      "Material UI",
    ],
    color: "bg-zinc-900/80",
  },
];

export const SkillsWindow = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-xl border border-zinc-800 bg-black shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-2">
          </div>
          <span className="text-xs text-zinc-400 font-mono">
            yash@macbook-pro — bash
          </span>
          <span className="w-8" />
        </div>

        {/* Terminal body */}
        <div className="px-4 py-4 font-mono text-sm text-zinc-100 space-y-4">
          {/* Fake commands */}
          <div className="space-y-1">
            <p className="text-xs text-emerald-300">
              <span className="text-sky-400 mr-1">➜</span>
              ~ cd portfolio
            </p>
            <p className="text-xs text-emerald-300">
              <span className="text-sky-400 mr-1">➜</span>
              ~/portfolio ./show-skills.sh
            </p>
            <p className="text-xs text-zinc-500">fetching technical skills...</p>
            <p className="text-xs text-zinc-500">done ✅</p>
          </div>

          {/* Skills output */}
          <div className="space-y-6 mt-4">
            <h2 className="text-base font-semibold text-emerald-300 tracking-wide">
              Technical Skills
            </h2>

            <div className="grid gap-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.18em]">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-[11px] font-medium ${category.color} text-zinc-100 border border-zinc-700/70`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
