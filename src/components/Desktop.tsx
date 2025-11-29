import { ReactNode } from "react";

interface DesktopProps {
  children: ReactNode;
}

export const Desktop = ({ children }: DesktopProps) => {
  return (
    <div className="fixed inset-0 bg-desktop-gradient overflow-hidden">
      {/* Ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Desktop content */}
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
};
