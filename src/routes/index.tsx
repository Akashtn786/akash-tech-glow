import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import AnimatedCursor from "@/components/portfolio/AnimatedCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Sharma — IT Support & Hardware Technician | Chennai" },
      { name: "description", content: "Portfolio of Akash Sharma — Hardware Technician, Desktop Support Engineer, and Full Stack Web Developer based in Chennai. PC assembly, troubleshooting, Windows, networking." },
      { name: "keywords", content: "Akash Sharma, IT Support Chennai, Hardware Technician, Desktop Support Engineer, PC Assembly, Windows Support, Networking, Full Stack Developer" },
      { property: "og:title", content: "Akash Sharma — IT Support & Hardware Technician" },
      { property: "og:description", content: "Hardware Technician and IT Support professional experienced in PC assembly, troubleshooting, Windows, networking, and helpdesk operations." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Akash Sharma",
        jobTitle: "IT Support & Hardware Technician",
        address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
        email: "akashsharmatn786@gmail.com",
        telephone: "+91-9884341894",
        sameAs: ["https://github.com/Akashtn786", "https://linkedin.com/in/akash-sharma-05ab53291"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
