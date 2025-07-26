import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Cpu } from 'lucide-react';


const terminalSkills = {
  "Frontend": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap", "HTML"
  ],
  "Backend & APIs": [
    "Node.js", "Express.js", "MongoDB", "SQLAlchemy", "Flask", "Python", "FastAPI", "Jinja"
  ],
  "Cloud & DevOps": [
    "AWS EC2", "AWS Lambda", "AWS S3", "AWS RDS", "AWS API Gateway", "AWS IAM"
  ],
  "Other Tools": [
    "Arduino", "Raspberry Pi", "OpenCV", "Pandas", "NumPy", "Git", "VS Code", "pdfplumber", "python-docx", "Gemini API", "Adzuna API", "Gmail API"
  ]
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "text-secondary",
    borderColor: "border-secondary",
    skills: terminalSkills["Frontend"]
  },
  {
    title: "Backend & APIs",
    icon: Database,
    color: "text-accent",
    borderColor: "border-accent",
    skills: terminalSkills["Backend & APIs"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cpu,
    color: "text-green-400",
    borderColor: "border-green-400",
    skills: terminalSkills["Cloud & DevOps"]
  },
  {
    title: "Other Tools",
    icon: Code,
    color: "text-primary",
    borderColor: "border-primary",
    skills: terminalSkills["Other Tools"]
  }
];

const Skills = () => {
  return (
    <section className="container py-16" id="skills">
      {/* Terminal-style skills display (restored, more code-like) */}
      <Card className="mb-12 bg-terminal text-terminal-foreground p-6 font-mono">
        <div>
          <span className="text-green-400">tanay@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="text-accent">const</span> <span className="text-primary">skills</span> = <span className="text-white">{'{'}</span>
        </div>
        <div className="ml-6">
          {Object.entries(terminalSkills).map(([category, items], idx) => (
            <div key={category} className="mb-1">
              <span className="text-secondary">{category}</span>: [
              <span>
                {items.map((skill, skillIdx) => (
                  <span key={skillIdx}>
                    <span className="text-primary">"{skill}"</span>{skillIdx < items.length - 1 ? <span>, </span> : null}
                  </span>
                ))}
              </span>
              ]{idx < Object.entries(terminalSkills).length - 1 ? <span>,</span> : null}
            </div>
          ))}
        </div>
        <div><span className="text-white">{'}'}</span></div>
      </Card>

      {/* Skill categories grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="portfolio-card group">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-lg bg-surface-elevated ${category.borderColor} border-2`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="hover-lift cursor-pointer hover:border-primary hover:text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Additional info */}
      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground">
          Always learning, always growing. Currently exploring{' '}
          <span className="text-primary font-semibold">Advanced Machine Learning</span> and{' '}
          <span className="text-secondary font-semibold">Cloud Architecture</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;