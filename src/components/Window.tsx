import { ReactNode, useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface WindowProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  initialPosition?: { x: number; y: number };
  onClose?: () => void;
  isOpen: boolean;
  zIndex: number;
  onFocus: () => void;
}

export const Window = ({
  title,
  icon,
  children,
  initialPosition = { x: 100, y: 100 },
  onClose,
  isOpen,
  zIndex,
  onFocus,
}: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && windowRef.current) {
      gsap.fromTo(
        windowRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      if (isMinimized) {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  }, [isMinimized]);

  const handleClose = () => {
    if (windowRef.current) {
      gsap.to(windowRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          onClose?.();
        },
      });
    }
  };

  if (!isOpen) return null;

  return (
    <Draggable
      handle=".window-titlebar"
      defaultPosition={initialPosition}
      bounds="parent"
      disabled={isMaximized}
    >
      <div
        ref={windowRef}
        className={cn(
          "absolute top-10 left-20 bg-card/90 backdrop-blur-xl rounded-xl shadow-2xl border border-window-border overflow-hidden",
          isMaximized ? "!top-0 !left-0 w-full h-[calc(100%-80px)] rounded-none" : title === "Resume" ? "w-2/3 h-3/4" : "w-[800px]"
        )}
        style={{ zIndex }}
        onClick={onFocus}
      >
        {/* Titlebar */}
        <div className="window-titlebar flex items-center justify-between px-4 py-3 bg-titlebar border-b border-border/50 cursor-move">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
                aria-label="Close"
              />
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center"
                aria-label="Minimize"
              >
                {isMinimized && <Minus className="w-2 h-2 text-gray-900" />}
              </button>
              <button
                // onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center"
                aria-label="Maximize"
              >
                {isMaximized && <Square className="w-2 h-2 text-gray-900" />}
              </button>
            </div>
            {icon && <div className="text-primary">{icon}</div>}
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="overflow-auto max-h-[500px]">
          <div className={`${title === "Skills" || title === "Resume" || title === "Contact" ? "p-0" : "p-6"}`}>{children}</div>
        </div>
      </div>
    </Draggable>
  );
};
