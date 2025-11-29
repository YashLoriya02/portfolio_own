import { useState } from "react";
import { Desktop } from "@/components/Desktop";
import { Window } from "@/components/Window";
import { Dock } from "@/components/Dock";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ExperienceWindow } from "@/components/windows/ExperienceWindow";
import { SkillsWindow } from "@/components/windows/SkillsWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { User, Briefcase, Code, FolderOpen, Mail, FileText } from "lucide-react";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { MenuBar } from "@/components/MeuBar";

interface WindowState {
  id: string;
  isOpen: boolean;
  zIndex: number;
}

const windowPositions: Record<string, { x: number; y: number }> = {
  about: { x: 100, y: 80 },
  experience: { x: 150, y: 120 },
  skills: { x: 200, y: 160 },
  projects: { x: 250, y: 100 },
  contact: { x: 300, y: 140 },
  resume: { x: 220, y: 90 },
};

const Index = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "about", isOpen: false, zIndex: 0 },
    { id: "experience", isOpen: false, zIndex: 0 },
    { id: "skills", isOpen: false, zIndex: 0 },
    { id: "projects", isOpen: false, zIndex: 0 },
    { id: "contact", isOpen: false, zIndex: 0 },
    { id: "resume", isOpen: false, zIndex: 0 },
  ]);

  const openWindow = (windowId: string) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex));
      return prev.map((win) =>
        win.id === windowId
          ? { ...win, isOpen: true, zIndex: maxZ + 1 }
          : win.id === "contact"
            ? { ...win, isOpen: false, zIndex: maxZ + 1 }
            : win
      );
    });
  };

  const handleIconClick = (windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === windowId) {
          const maxZ = Math.max(...prev.map((w) => w.zIndex));
          return { ...win, isOpen: !win.isOpen, zIndex: win.isOpen ? win.zIndex : maxZ + 1 };
        }
        return win;
      })
    );
  };

  const handleWindowClose = (windowId: string) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === windowId ? { ...win, isOpen: false } : win))
    );
  };

  const handleWindowFocus = (windowId: string) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex));
      return prev.map((win) =>
        win.id === windowId ? { ...win, zIndex: maxZ + 1 } : win
      );
    });
  };

  const getWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "experience":
        return <ExperienceWindow />;
      case "skills":
        return <SkillsWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "contact":
        return <ContactWindow onOpenResume={() => openWindow("resume")} />;
      case "resume":
        return <ResumeWindow />;
      default:
        return null;
    }
  };

  const getWindowIcon = (id: string) => {
    const iconMap: Record<string, any> = {
      about: User,
      experience: Briefcase,
      skills: Code,
      projects: FolderOpen,
      contact: Mail,
      resume: FileText,
    };
    const Icon = iconMap[id];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  const getWindowTitle = (id: string) => {
    const titleMap: Record<string, string> = {
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    };
    return titleMap[id] || id;
  };

  const getActiveWindowTitle = () => {
    const open = windows.filter((w) => w.isOpen);
    if (!open.length) return "";
    const top = open.reduce((max, w) => (w.zIndex > max.zIndex ? w : max), open[0]);
    return getWindowTitle(top.id);
  };

  return (
    <>
      <MenuBar activeWindowTitle={getActiveWindowTitle()} />
      <Desktop>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto flex flex-col items-center gap-4 text-center px-4">
            {/* Tiny terminal-style line */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                &gt; get intro --name yash
              </span>
            </div>

            {/* Big name with gradient */}
            <h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Yash Loriya
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              I build interactive applications — occasionally exciting, <br /> sometimes boring, always shipped.
            </p>

            {/* Quick tags */}
            <div className="flex flex-wrap justify-center gap-2 text-[11px] font-mono text-muted-foreground mt-1">
              <span className="px-2 py-1 rounded-full border border-border/70 bg-background/60">
                #MERN
              </span>
              <span className="px-2 py-1 rounded-full border border-border/70 bg-background/60">
                #Next.js
              </span>
              <span className="px-2 py-1 rounded-full border border-border/70 bg-background/60">
                #DevOps
              </span>
              <span className="px-2 py-1 rounded-full border border-border/70 bg-background/60">
                #Flutter
              </span>
            </div>
          </div>
        </div>

        {windows.map((window) => (
          <Window
            key={window.id}
            title={getWindowTitle(window.id)}
            icon={getWindowIcon(window.id)}
            isOpen={window.isOpen}
            zIndex={window.zIndex}
            initialPosition={windowPositions[window.id]}
            onClose={() => handleWindowClose(window.id)}
            onFocus={() => handleWindowFocus(window.id)}
          >
            {getWindowContent(window.id)}
          </Window>
        ))}
        <Dock
          onIconClick={handleIconClick}
          openWindows={windows.filter((w) => w.isOpen).map((w) => w.id)}
        />
      </Desktop>
    </>
  );
};

export default Index;
