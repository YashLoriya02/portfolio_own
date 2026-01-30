import { useState } from "react";
import { Folder, FolderOpen, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Builder",
    description:
      "Built a web application that enables users to create professional portfolio websites in minutes by simply uploading their resume. Integrated AI-powered resume parsing using Gemini to automatically extract and populate portfolio content, with ready-to-use templates and one-click publishing capabilities.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Gemini API",
      "GitHub API",
    ],
    github: "https://github.com/YashLoriya02/portfolio-builder",
  },
  {
    title: "Skribble - Multiplayer Drawing & Guessing Game",
    description:
        "Built a real-time multiplayer drawing and guessing game inspired by skribbl.io, enabling players to create or join rooms, draw collaboratively on a live canvas, and guess words through synchronized chat. Implemented low-latency real-time communication using WebSockets, ensuring smooth drawing synchronization, turn-based gameplay, live scoring, and room-based multiplayer interactions.",
    tech: [
      "React.js",
      "Vite",
      "TypeScript",
      "Canvas API",
      "WebSocket",
      "Node.js",
      "Real-Time Communication",
    ],
    github: "https://github.com/YashLoriya02/skribble",
  },
  {
    title: "Google Drive Clone",
    description:
      "Architected an efficient document management platform with categorized sidebars, powerful search functionality, and real-time collaboration tools. Implemented role-based security and seamless document updates to enhance team productivity.",
    tech: [
      "Tailwind CSS",
      "Next.js",
      "LLM",
      "AppWrite",
      "Server Actions",
      "MongoDB",
    ],
    github: "https://github.com/YashLoriya02/storage-management",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Developed an AI-powered resume analysis tool that provides instant, comprehensive feedback on resumes. Leverages LLM technology to evaluate content quality, suggest improvements, identify skill gaps, and generate ATS optimization scores. Features document categorization, real-time parsing, and personalized career recommendations to help job seekers enhance their applications.",
    tech: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Puter",
      "Zustand",
    ],
    github: "https://github.com/YashLoriya02/ai-resume-analyzer",
  },
  {
    title: "End-To-End Code Migration Tool",
    description:
      "Designed an AI-assisted end-to-end code migration system to convert React web applications into React Native mobile apps. Leveraged LLMs and GitHub API to analyze repositories, generate platform-specific components, and preserve business logic while reducing manual migration effort.",
    tech: [
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Express.js",
      "Github API",
      "Prompts",
      "LLM",
    ],
    github: "https://github.com/YashLoriya02/code_conversion",
  },
  {
    title: "Summarizer-CLI ",
    description:
      "Developed an npm CLI tool utilizing Large Language Models (LLMs) to instantly summarize code files, functions, and custom prompts directly from the terminal. Integrated features such as automatic function extraction, syntax highlighting, and multiple export formats to streamline developer code reviews and documentation.",
    tech: ["NPM", "Node.js", "LLM", "RegExp"],
    github: "https://github.com/YashLoriya02/npm-summarizer-cli",
  },
  {
    title: "Indian Dialect Translator",
    description:
      "A multilingual dialect translation system focused on Marathi and its regional variants like Goan, Kolhapuri, Varhadi, Khandeshi, and code-mixed styles.",
    tech: ["Tailwind CSS", "Next.js", "LLM", "RAG Model", "Flask", "Vector DB"],
    github: "https://github.com/YashLoriya02/Dialect_Translation",
  },
  {
    title: "Video Conferencing Platform",
    description:
      "Built a real-time video conferencing application featuring secure user authentication via Clerk and high-quality video transmission using Stream SDK. Designed an intuitive interface with meeting controls and room management, ensuring low-latency communication.",
    tech: ["Next.js", "TypeScript", "Clerk", "Tailwind", "Stream"],
    github: "https://github.com/YashLoriya02/meeting-nextjs",
  },
  {
    title: "Health Management Platform",
    description:
      "Developed a comprehensive health management system enabling users to track medical records, appointments, and health metrics in one place. Implemented secure authentication, role-based access, and real-time data updates using Appwrite, ensuring data privacy and a smooth user experience.",
    tech: ["Tailwind CSS", "Next.js", "TypeScript", "Appwrite"],
    github: "https://github.com/YashLoriya02/health_management",
  },
  {
    title: "AstroAI - Astronomy RAG Chatbot",
    description:
      "AstroAI is an AI-powered chatbot built using Retrieval-Augmented Generation (RAG) to provide informative, factual, and contextual answers in the field of astronomy and space science. It includes streaming responses, prompt control, and basic identity filtering.",
    tech: ["Tailwind CSS", "React.js", "Vite", "LLM", "RAG Model"],
    github: "https://github.com/YashLoriya02/AstroAI",
  },
  {
    title: "Offline First Task Manager App",
    description:
      "Built an offline-first task management application optimized for reliability and performance, allowing users to create, update, and sync tasks seamlessly without internet access. Implemented local persistence with SQLite, background syncing, and state management using BLoC architecture for scalable Flutter development.",
    tech: ["Docker", "Flutter", "TypeScript", "Express.js", "SQLite", "BLoC"],
    github: "https://github.com/YashLoriya02/offline_first_task_app",
  },
];

export const ProjectsWindow = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="text-xs font-mono text-muted-foreground">
        <span className="text-primary mr-1">&gt;</span>
        taskmgr.projects.list()
      </div>

      <div className="flex flex-1 gap-3 min-h-[260px]">
        <div className="w-1/3 min-w-[180px] rounded-lg border border-border/70 bg-muted/30 overflow-hidden flex flex-col">
          <div className="px-3 py-2 border-b border-border/70 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
            <span>projects</span>
            <span className="text-[10px]">
              {projects.length.toString().padStart(2, "0")} items
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {projects.map((project, index) => {
              const isActive = index === selectedIndex;
              return (
                <button
                  key={project.title + index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left text-xs border-b border-border/40 last:border-b-0 transition-all ${isActive
                    ? "bg-primary/10 text-foreground"
                    : "hover:bg-muted/40 text-muted-foreground"
                    }`}
                >
                  {isActive ? (
                    <FolderOpen className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-amber-400" />
                  )}
                  <span className="truncate">{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 rounded-lg border border-border/70 bg-muted/20 p-4 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h2 className="text-sm md:text-base font-semibold text-foreground">
                {selectedProject.title}
              </h2>
              <p className="text-[11px] text-muted-foreground font-mono">
                status: <span className="text-emerald-400">running</span> ·{" "}
                stack: {selectedProject.tech.length} items
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-border/70 bg-background/60 hover:border-primary/60 hover:bg-background text-[11px] text-muted-foreground transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mb-3">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {selectedProject.tech.map((tech, idx) => (
              <span
                key={tech + idx}
                className="px-2 py-1 text-[11px] rounded-full bg-primary/10 text-primary font-medium border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
