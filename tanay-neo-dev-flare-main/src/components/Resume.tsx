import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          <span className="text-gradient-primary">Resume</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Download my resume or view it online to learn more about my experience and qualifications
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="portfolio-card text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Professional Resume</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my education, projects, technical skills, and achievements in computer science and software development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/Tanay-cv.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="hover-lift bg-primary hover:bg-primary/90">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </a>
          </div>

          <div className="mt-8 p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="font-semibold mb-4">Resume Highlights</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-medium text-primary mb-2">Education</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• B.Tech Computer Science - VIT</li>
                  <li>• BS Data Science - IIT Madras</li>
                  <li>• Strong DSA Foundation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-secondary mb-2">Key Projects</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Guardian Safety App</li>
                  {/* <li>• AI Emotion Detection</li> */}
                  <li>• IoT Proximity Systems</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-accent mb-2">Technical Skills</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Full-stack Development</li>
                  <li>• Machine Learning & AI</li>
                  {/* <li>• Arduino & IoT</li> */}
                  <li>• AWS Cloud (EC2, Lambda, S3, RDS, API Gateway, IAM)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary mb-2">Achievements</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dual Degree Pursuit</li>
                  <li>• Multiple Project Completions</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Last updated: December 2024 | Version 2.1
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;