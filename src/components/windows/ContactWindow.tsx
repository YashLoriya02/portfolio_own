import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:yashloriya0206@gmail.com",
    color: "hover:text-primary",
    label: "yashloriya0206@gmail.com",
    hint: "Best for quick replies",
    copyValue: "yashloriya0206@gmail.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/YashLoriya02",
    color: "hover:text-foreground",
    label: "github.com/YashLoriya02",
    hint: "See what I'm building",
    copyValue: "https://github.com/YashLoriya02",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yash-loriya",
    color: "hover:text-primary",
    label: "linkedin.com/in/yash-loriya",
    hint: "Let's talk opportunities",
    copyValue: "https://linkedin.com/in/yash-loriya",
  },
  {
    name: "X",
    icon: Twitter,
    href: "https://x.com",
    color: "hover:text-primary",
    label: "@_Yash0206",
    hint: "Occasional thoughts & updates",
    copyValue: "@_Yash0206",
  },
];

export const ContactWindow = ({ onOpenResume }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string, name: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(value);
    }
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="w-full">
      <div className="rounded-xl border border-border/60 bg-background/80 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Header / command bar */}
        <div className="px-4 py-3 border-b border-border/60 bg-gradient-to-r from-background via-background/80 to-primary/10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">
                <span className="text-primary mr-1">&gt;</span>
                connect --with yash
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
              status: <span className="text-emerald-400">open to opportunities</span>
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-4 sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">
              Let&apos;s Connect
            </h2>
            <p className="text-sm text-muted-foreground">
              Whether it&apos;s a collaboration, an interesting problem, or just
              a friendly tech chat — I&apos;m always happy to talk.
            </p>
          </div>

          {/* Social rows */}
          <div className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isCopied = copied === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/60 ${link.color} transition-all hover:border-primary/60 hover:bg-muted/40 hover:-translate-y-[1px]`}
                >
                  {/* Icon bubble */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border/80 group-hover:border-primary/60 group-hover:shadow-sm transition-all">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-medium text-foreground flex items-center gap-2">
                        {link.name}
                        {link.name === "Email" && (
                          <span className="px-2 py-[1px] rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            preferred
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground hidden sm:inline">
                        {link.hint}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate">
                        {link.label}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCopy(link.copyValue, link.name);
                        }}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-border/60 bg-background/60 text-[10px] text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-background transition-all"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{isCopied ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="text-[11px] text-muted-foreground font-mono">
                <span className="text-primary mr-1">&gt;</span>
                portfolio.export(&quot;resume.pdf&quot;)
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  Open Resume
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto border-primary/60 text-primary hover:bg-primary/10"
                >
                  <a href="/Yash_Loriya_Resume.pdf" download>
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
