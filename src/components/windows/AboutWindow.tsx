export const AboutWindow = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-primary-foreground">
          YL
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">Yash Loriya</h2>
          <p className="text-lg text-primary mb-1">Software Developer | Cloud | DevOps | AIML</p>
          <p className="text-muted-foreground">Mumbai, India</p>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-foreground leading-relaxed">
          Full Stack Developer with 2+ years of hands-on experience, I contribute to both web and mobile development teams. My expertise spans frontend technologies including React, Next.js, Redux, and Flutter with BLoC architecture, alongside backend development using Node.js, MongoDB, Socket.io, and Python. I've solved complex real-world challenges involving WebSockets, real-time communication, deep linking, webhooks, and notification routing systems. Additionally, I have strong experience in cloud infrastructure and DevOps, working with AWS services (EC2, ECS, ECR, S3, CodePipeline) and implementing Infrastructure as Code using Terraform for deploying dockerized applications. Currently, I'm actively contributing to Healo, A Mental Health AI Chatbot.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-primary">2+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-accent">20+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
      </div>
    </div>
  );
};
