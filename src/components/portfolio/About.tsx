import { useEffect, useRef } from "react";
import { Terminal, Coffee, Globe, Users, Layers, Clock } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience", icon: Terminal },
  { value: "12+", label: "Technologies Used", icon: Layers },
  /*{ value: "50+", label: "Projects Shipped", icon: Globe },*/
  { value: "1000+", label: "Hours of Coding", icon: Clock },
  { value: "∞", label: "Cups of Coffee", icon: Coffee },
  /*{ value: "20+", label: "Happy Clients", icon: Users },*/
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/2 pointer-events-none rounded-l-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
          <p className="section-tag mb-3">// 01. about_me</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Who <span className="text-gradient">Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <div className="space-y-6">
            <div
              className="reveal card-glass rounded-2xl p-6"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.1s" }}
            >
              <div className="mono text-xs text-muted-foreground mb-3">profile.json</div>
              <pre className="mono text-sm text-foreground/80 overflow-x-auto leading-relaxed">
{`{
  "name": "Syed Ahmed Ali",
  "role": "Python Fullstack Developer",
  "location": "Bangalore, Karnataka, India",
  "experience": "Fresher",
  "focus": [
    "Python Fullstack Development",
    "Backend APIs",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "React Frontends"
  ]
}`}
              </pre>
            </div>

            <div
              className="reveal space-y-4 text-muted-foreground leading-relaxed"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
            >
              <p>
                I'm a passionate <span className="text-primary font-medium">Python Fullstack Developer</span> building robust, scalable web applications. I thrive at the
                intersection of elegant backend architecture and seamless user experiences.
              </p>
              <p>
                My journey started with Python scripting, evolved through Django and FastAPI for backend
                mastery, and expanded to React for crafting modern frontends. I've shipped products used
                by thousands — from real-time data pipelines to SaaS platforms.
              </p>
              <p>
                When I'm not coding, I contribute to open-source, write technical blogs, and mentor
                junior developers. I believe great software is built by teams who care.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal gradient-border-card p-6 rounded-2xl text-center"
                  style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.6s ease ${0.1 + i * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div
              className="reveal card-glass rounded-2xl p-6 space-y-3"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.5s" }}
            >
              <p className="mono text-xs text-primary mb-4">// quick_facts</p>
              {[
                ["🐍", "Python is my primary language"],
                ["⚡", "FastAPI & Django REST framework"],
                ["⚛️", "React + TypeScript on the frontend"],
                ["☁️", "AWS, Docker, CI/CD pipelines"],
                ["🗄️", "PostgreSQL, Redis, MongoDB"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
