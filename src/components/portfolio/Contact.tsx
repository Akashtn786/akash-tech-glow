import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Phone, Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "+91 98843 41894", href: "tel:+919884341894" },
  { icon: Mail, label: "Email", value: "akashsharmatn786@gmail.com", href: "mailto:akashsharmatn786@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "akash-sharma-05ab53291", href: "https://linkedin.com/in/akash-sharma-05ab53291" },
  { icon: Github, label: "GitHub", value: "Akashtn786", href: "https://github.com/Akashtn786" },
  { icon: MapPin, label: "Location", value: "Shenoy Nagar, Chennai – 600030", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Please enter your name (max 100).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255) e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.length > 1000) e.message = "Message is required (max 1000).";
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:akashsharmatn786@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">connect</span></>}
        sub="Open to IT Support, Hardware Technician, and Desktop Support roles in Chennai and remote."
      />
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-4 flex items-center gap-4 hover-lift block"
            >
              <div className="rounded-xl bg-primary/15 text-primary p-3"><c.icon className="h-4 w-4" /></div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="text-sm truncate">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass gradient-border rounded-3xl p-7 space-y-4"
        >
          <Field label="Your name" error={errors.name}>
            <input
              value={form.name} maxLength={100}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              placeholder="Jane Doe"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email" value={form.email} maxLength={255}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              placeholder="jane@company.com"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message} maxLength={1000} rows={5}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="Tell me about the role or project…"
            />
          </Field>
          <button type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow hover:scale-[1.03] transition-transform">
            {sent ? <><CheckCircle2 className="h-4 w-4" /> Opening email…</> : <><Send className="h-4 w-4" /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive mt-1">{error}</span>}
    </label>
  );
}
