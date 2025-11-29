const experiences = [
  {
    title: "SDE Intern",
    company: "Infiheal HealthTech PVT LTD",
    period: "June 2024 - Present",
    description: "Engineered scalable full-stack web applications using the MERN stack, ensuring high availability and performance. Implemented containerization strategies using Docker and managed cloud deployments on AWS services (EC2, S3). Spearheading the development of the ’HealoAI’ mobile application using Flutter and Bloc architecture, focusing on clean state management and responsive UI implementation.",
    color: "bg-secondary/10 border-secondary",
  },
  {
    title: "Full Stack Developer",
    company: "Freelancing",
    period: "Jan 2024 - June 2024",
    description: "Collaborated with a team of 5 developers to deliver 3 robust full-stack web applications for clients. Optimized frontend performance and backend latency, ensuring seamless user experiences across devices. Translated client requirements into technical specifications and delivered features within strict deadlines.",
    color: "bg-primary/10 border-primary",
  },
];

export const ExperienceWindow = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground mb-4">Work Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-l-4 ${exp.color} bg-card/50`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-foreground">{exp.title}</h3>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
