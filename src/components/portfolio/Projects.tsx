import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { ExternalLink, Github, Cpu, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    title: "Personal Developer Portfolio",
    year: "2024",
    desc: "Responsive single-page portfolio deployed on GitHub Pages — clean design, mobile-first layout, and 48+ Git commits.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    live: "https://akashtn786.github.io",
    repo: "https://github.com/Akashtn786",
  },
  {
    icon: Sparkles,
    title: "AI-Powered SDLC Tool",
    year: "2025",
    desc: "Python tool using IBM Granite LLM to automate requirements analysis, test case generation, and documentation across SDLC phases.",
    tags: ["Python", "IBM Granite", "LLM", "Automation"],
    live: "#",
    repo: "https://github.com/Akashtn786",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title={<>Selected <span className="gradient-text">work</span></>}
        sub="A small but growing portfolio of shipped projects across web and AI."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden hover-lift"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-primary/15 text-primary p-3"><p.icon className="h-5 w-5" /></div>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <a href={p.live} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:scale-[1.05] transition-transform">
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium hover:text-primary transition-colors">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
