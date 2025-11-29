import { Apple, AppleIcon, Laptop, Laptop2, LucideApple } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuBarProps {
    activeWindowTitle?: string;
}

export const MenuBar: React.FC<MenuBarProps> = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleString("en-CA", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 30_000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 inset-x-0 z-40">
            <div className="flex items-center justify-end py-2 px-3 text-lg text-zinc-100 ">
                <span>{time}</span>
            </div>
        </div>
    );
};
