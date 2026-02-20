import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = [
  "Python Fullstack Developer",
  "Fullstack Engineer",
  "Django & FastAPI Expert",
  "React Frontend Developer",
  "Cloud & DevOps Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  /*const particlesRef = useRef<HTMLDivElement>(null);*/

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Floating particles
  /*useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      p.className = "floating-particle";
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 10 + 8}s;
        animation-delay: ${Math.random() * 8}s;
        opacity: 0;
      `;
      container.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);*/

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Particles container */}
      {/*<div ref={particlesRef} className="absolute inset-0 pointer-events-none" />*/}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="mono text-xs text-primary">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Syed Ahmed Ali</span>
        </h1>

        {/* Typing role */}
        <div
          className="h-12 sm:h-14 flex items-center justify-center mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="mono text-lg sm:text-2xl text-primary font-medium">
            &gt; {displayed}
            <span className="typing-cursor" />
          </p>
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          Crafting scalable web applications with Python backends and modern frontends.
          Passionate about clean code, system design, and building products that matter.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(174_85%_50%/0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="https://drive.google.com/file/d/1m1yMilr27F99SPO7-PB3xBZpvvDblVS2/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-surface-raised border border-border text-foreground font-semibold text-sm hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: Github, href: "https://github.com/ahhmeddd-11", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ahhmeddd", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-surface-overlay border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="mono text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
          SCROLL
        </span>

        <div className="w-6 h-10 border-2 border-muted-foreground/40 group-hover:border-primary rounded-full flex justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-primary rounded-full animate-scrollDot" />
        </div>
      </button>
    </section>
  );
}
