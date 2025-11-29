export const ResumeWindow = () => {
    return (
        <div className="h-screen flex p-2 flex-col gap-3">
            <div className="text-xs font-mono text-muted-foreground">
                <span className="text-primary mr-1">&gt;</span>
                open ./Yash_Loriya_Resume.pdf
            </div>

            <div className="flex-1 border border-border/60 rounded-lg overflow-hidden bg-muted/20">
                <iframe
                    src="/Yash_Loriya_Resume.pdf"
                    className="h-full w-full"
                    title="Yash Loriya Resume"
                />
            </div>
        </div>
    );
};
