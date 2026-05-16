import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { MapPin, Briefcase, Cpu, Code2 } from "lucide-react";

const pills = [
  { icon: MapPin, label: "Chennai-based IT Support professional" },
  { icon: Briefcase, label: "Government CSC support operations" },
  { icon: Cpu, label: "Hardware, OS, networking & desktop support" },
  { icon: Code2, label: "Passionate about PC building & web tech" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title={<>Who is <span className="gradient-text">Akash</span>?</>} />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass gradient-border rounded-3xl p-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="text-primary font-medium">Hardware Technician</span> and
            <span className="text-primary font-medium"> IT Support professional</span> based in Chennai with
            hands-on experience assembling and repairing desktops, configuring Windows, setting up
            networks, and running helpdesk operations at a Government Common Service Centre.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I reduced repair turnaround by <span className="text-foreground font-medium">40%</span> while
            supporting <span className="text-foreground font-medium">50+ citizens/month</span> through Aadhaar,
            PAN, and DigiLocker services. Alongside hardware, I build responsive websites and explore
            Python, Java, and AI-assisted tooling.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-xs">
            <Stat k="40%" v="Faster turnaround" />
            <Stat k="50+" v="Users / month" />
            <Stat k="48+" v="GitHub commits" />
          </div>
        </motion.div>

        <div className="grid gap-3 content-start">
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-4 flex items-start gap-3 hover-lift"
            >
              <div className="rounded-xl bg-primary/15 text-primary p-2.5"><p.icon className="h-4 w-4" /></div>
              <span className="text-sm leading-snug pt-1.5">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-secondary/40 p-3 text-center">
      <div className="text-xl font-bold gradient-text">{k}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
    </div>
  );
}
