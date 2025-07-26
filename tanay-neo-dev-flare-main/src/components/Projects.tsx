import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Map, Brain, Zap } from 'lucide-react';
import Certifications from './Certifications';

const Projects = () => {
  const projects = [
    {
      title: "NTPC Internship (Software Development Intern)",
      description:
        "Interned at NTPC Limited (May-Jul 2025), IT department, Singrauli. Built a Template Website and Group Manager Website. Gained hands-on experience with SAP/ERP, networking, databases, and cybersecurity.",
      icon: Brain,
      color: "text-primary",
      borderColor: "border-primary",
      tech: [
        "SAP/ERP",
        "Networking",
        "Databases",
        "Cybersecurity",
        "Web Development"
      ],
      github: "https://github.com/tanaymehto/grp_management_final",
      live: null
    },
    {
      title: "Resume Analyzer",
      description: "A tool to parse and analyze resumes, extract key info (skills and gaps), quick apply for jobs, and generate company-wise cold emails. Built for accuracy and efficiency.",
      icon: Shield,
      color: "text-primary",
      borderColor: "border-primary",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "FastAPI",
        "pdfplumber",
        "python-docx",
        "Gemini API",
        "Adzuna API",
        "Gmail API"
      ],
      github: "https://github.com/tanaymehto",
      live: null
    },
    {
      title: "Vehicle Parking App",
      description: "A basic CRUD web app for managing four-wheeler parking slots. Allows users to add, view, update, and delete parking records.",
      icon: Map,
      color: "text-secondary",
      borderColor: "border-secondary",
      tech: ["Flask", "SQLAlchemy", "Jinja", "Bootstrap", "HTML"],
      github: "https://github.com/tanaymehto/mad-1-project",
      live: null
    },
    {
      title: "VIT Mess Management System",
      description: "A web application for managing mess operations at VIT. Features include student registration, meal booking, feedback, and admin controls. Built for efficiency and scalability.",
      icon: Shield,
      color: "text-accent",
      borderColor: "border-accent",
      tech: ["React", "Next.js", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
      github: "https://github.com/chaudharymanik/VIT-Mess-Manager",
      live: null
    },
    
    
  ];

  return (
    <>
      <section id="projects" className="section-padding bg-surface/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
            Experience <span className="text-gradient-secondary">& Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my passion for building innovative solutions
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card group cursor-pointer">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-surface-elevated ${project.borderColor} border-2`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="hover:border-primary hover:text-primary"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        <a
          href="https://github.com/tanaymehto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </a>
        </div>
      </section>
      <Certifications />
    </>
  );
// ...existing code above...
// Removed duplicate/stray JSX after main return
};

export default Projects;