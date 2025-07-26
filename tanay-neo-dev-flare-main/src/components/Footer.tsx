import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#18181B"/>
                <path d="M12 11L7 16L12 21" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11L25 16L20 21" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 7L14 25" stroke="#F472B6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-2xl font-bold font-space-grotesk text-primary">Tanay Mehto</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/tanaymehto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/tanaymehto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button size="sm" variant="ghost" className="hover:text-secondary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="mailto:tanaymehto@gmail.com"
              aria-label="Email"
            >
              <Button size="sm" variant="ghost" className="hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Copyright and love */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tanay Mehto.
        
            </p>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="font-mono text-xs text-muted-foreground text-center">
            <span className="text-accent">$</span> echo "Thanks for visiting my portfolio!" <br />
            <span className="text-primary">visitor@tanay-portfolio:~$</span> Have a great day! 🚀
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;