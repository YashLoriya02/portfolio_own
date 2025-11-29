import { User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useRef, useEffect } from "react";

interface DockProps {
  onIconClick: (window: string) => void;
  openWindows: string[];
}

const dockIcons = [
  { id: "about", icon: User, label: "About", color: "text-primary" },
  { id: "experience", icon: Briefcase, label: "Experience", color: "text-secondary" },
  { id: "skills", icon: Code, label: "Skills", color: "text-accent" },
  { id: "projects", icon: FolderOpen, label: "Projects", color: "text-yellow-500" },
  { id: "contact", icon: Mail, label: "Contact", color: "text-pink-500" },
];

export const Dock = ({ onIconClick, openWindows }: DockProps) => {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dockRef.current) {
      gsap.fromTo(
        dockRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.3 }
      );
    }
  }, []);

  return (
    <div
      ref={dockRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-dock-bg backdrop-blur-xl rounded-2xl px-8 py-3 border border-window-border shadow-2xl"
    >
      <div className="flex gap-4">
        {dockIcons.map((item) => {
          const Icon = item.icon;
          const isOpen = openWindows.includes(item.id);
          
          return (
            <button
              key={item.id}
              onClick={() => onIconClick(item.id)}
              className={cn(
                "relative group p-3 rounded-xl transition-all duration-300 hover:bg-muted hover:scale-110",
                isOpen && "bg-muted/50"
              )}
              aria-label={item.label}
            >
              <Icon className={cn("w-6 h-6", item.color)} />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card/95 backdrop-blur-sm rounded-md text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </div>
              
              {/* Active indicator */}
              {isOpen && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
