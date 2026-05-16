import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderKanban, MapPin, ArrowDown } from "lucide-react";

const roles = ["Hardware Technician", "IT Support Engineer", "Desktop Support Engineer", "Full Stack Web Developer"];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") { setDeleting(false); setI((v) => v + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return text;
}

export default function Hero() {
  const typed = useTyping();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for IT Support roles
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Akash <span className="gradient-text">Sharma</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="mt-5 text-xl md:text-2xl font-mono text-foreground/90 h-8">
            <span className="text-primary">&gt;_</span> {typed}
            <span className="cursor-blink ml-0.5">|</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Hardware Technician and IT Support professional experienced in PC assembly, troubleshooting,
            Windows configuration, networking, and helpdesk operations.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/Akash_Sharma_Resume.pdf" download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow hover:scale-[1.03] transition-transform">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover-lift">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <FolderKanban className="h-4 w-4" /> View Projects
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Chennai, India</span>
            <span>•</span>
            <span>50+ users supported / month</span>
            <span>•</span>
            <span>40% faster turnaround</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl" />
          <div className="relative glass rounded-3xl p-6 animate-float">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">akash@chennai ~ %</span>
            </div>
            <pre className="font-mono text-xs leading-relaxed text-foreground/85">
{`> whoami
akash_sharma

> stack --list
hardware    : [PC build, BIOS/UEFI, POST]
os          : [Win 7 / 10 / 11]
network     : [LAN, Wi-Fi, IP, Router]
dev         : [HTML, CSS, JS, Python, Java]

> status
\u001b[32m● online — open to opportunities\u001b[0m`}
            </pre>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
