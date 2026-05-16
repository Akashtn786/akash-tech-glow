import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Akash Sharma</span> — Built with care in Chennai.
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Akashtn786" target="_blank" rel="noreferrer" className="glass rounded-full p-2.5 hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/akash-sharma-05ab53291" target="_blank" rel="noreferrer" className="glass rounded-full p-2.5 hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:akashsharmatn786@gmail.com" className="glass rounded-full p-2.5 hover:text-primary transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
