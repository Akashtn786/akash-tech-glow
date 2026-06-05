import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    role: "IT Support Operator",
    org: "Common Service Centre (CSC) — Govt. of India",
    period: "May 2026 — Present · Chennai",
    points: [
      "Assembled and repaired 10+ desktops/month; verified via POST diagnostics and stress tests.",
      "Resolved 20+ hardware/software issues per month — cut turnaround time by 40%.",
      "Configured Windows OS (7/10/11), drivers, antivirus, and LAN/Wi-Fi for local workstations.",
      "Provided helpdesk support to 10+ citizens/month for Aadhaar, PAN, and DigiLocker services.",
    ],
  },
  {
    icon: GraduationCap,
    role: "Full Stack Web Development Intern",
    org: "IETE & Pantech E Learning",
    period: "Jun 2025 (1–15 Jun) · Chennai",
    points: [
      "Built responsive web pages with HTML5, CSS3, and JavaScript.",
      "Developed a Java CRUD application end-to-end.",
      "Maintained 48+ Git commits on a collaborative GitHub workflow.",
    ],
  },
  {
    icon: GraduationCap,
    role: "B.Sc. Computer Science",
    org: "Annai Violet Arts and Science College, Chennai",
    period: "2023 — 2026",
    points: [
      "Core CS foundations: data structures, OS, networking, and programming.",
      "Hands-on coursework in web development and database fundamentals.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title={<>Career <span className="gradient-text">timeline</span></>} />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="space-y-12">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>div:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className="glass gradient-border rounded-2xl p-6 hover-lift">
                    <div className={`flex items-center gap-2 text-xs font-mono text-primary ${left ? "md:justify-end" : ""}`}>
                      <it.icon className="h-3.5 w-3.5" /> {it.period}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{it.role}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{it.org}</p>
                    <ul className={`mt-4 space-y-2 text-sm text-foreground/85 ${left ? "md:text-right" : ""}`}>
                      {it.points.map((p) => (
                        <li key={p} className="leading-relaxed">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-primary glow ring-4 ring-background" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
