import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  Cpu, HardDrive, Settings2, MonitorSmartphone, Wifi, Network,
  FileCode2, Palette, Braces, Terminal, Coffee, Github, FileText, Cloud,
} from "lucide-react";

const groups = [
  {
    title: "Hardware & Systems",
    items: [
      { icon: Settings2, name: "Hardware Troubleshooting", level: 92 },
      { icon: Cpu, name: "PC Assembly", level: 90 },
      { icon: HardDrive, name: "BIOS / UEFI", level: 85 },
      { icon: MonitorSmartphone, name: "Windows 7 / 10 / 11", level: 90 },
    ],
  },
  {
    title: "Networking & Support",
    items: [
      { icon: Network, name: "Networking", level: 80 },
      { icon: Wifi, name: "LAN & Wi-Fi Setup", level: 85 },
      { icon: FileText, name: "MS Office", level: 88 },
      { icon: Cloud, name: "Google Workspace", level: 85 },
    ],
  },
  {
    title: "Development & Tools",
    items: [
      { icon: FileCode2, name: "HTML5", level: 88 },
      { icon: Palette, name: "CSS3", level: 82 },
      { icon: Braces, name: "JavaScript", level: 75 },
      { icon: Terminal, name: "Python", level: 65 },
      { icon: Coffee, name: "Java", level: 60 },
      { icon: Github, name: "GitHub", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={<>Tooling &<span className="gradient-text"> capabilities</span></>}
        sub="A blend of hands-on hardware expertise, IT support fundamentals, and modern web development."
      />
      <div className="grid lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: gi * 0.1 }}
            className="glass rounded-3xl p-6 hover-lift"
          >
            <h3 className="font-display font-semibold text-lg mb-5">{g.title}</h3>
            <div className="space-y-4">
              {g.items.map((s, i) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
