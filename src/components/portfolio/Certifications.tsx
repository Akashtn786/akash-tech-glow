import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Full Stack Web Development", issuer: "IETE & Pantech E Learning", year: "Jun 2025" },
  { title: "Fundamentals of Python Programming", issuer: "Online Certification", year: "2024" },
  { title: "Ethical Hacking 101 & Introduction", issuer: "Online / Self-Learning", year: "2024 – 2025" },
  { title: "Adobe Photoshop Workshop", issuer: "Bharat Sevak Samaj, Chennai", year: "Mar 2024" },
  { title: "CorelDRAW Workshop", issuer: "Bharat Sevak Samaj, Chennai", year: "Sep – Dec 2025" },
];

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Certifications" title={<>Training & <span className="gradient-text">credentials</span></>} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass rounded-2xl p-5 hover-lift flex gap-4"
          >
            <div className="shrink-0 rounded-xl bg-accent/20 text-accent p-3 self-start">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
              <p className="text-[11px] font-mono text-primary mt-2">{c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
