import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Python", "Django", "FastAPI", "REST APIs", "GraphQL", "Celery"]
  },
  {
    title: "Frontend Development",
    icon: "monitor",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"]
  },
  {
    title: "Database Management",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker", "AWS (EC2, S3, Lambda)", "CI/CD", "Git"]
  }
];

const techBadges = [
  "Python", "Django", "FastAPI", "Flask", "React", "TypeScript", "Next.js",
  "PostgreSQL", "Redis", "MongoDB", "Docker", "AWS", "Git", "Linux",
  "Celery", "RabbitMQ", "GraphQL", "REST", "JWT", "OAuth2", "Pytest",
  "SQLAlchemy", "Pydantic", "Nginx", "GitHub Actions",
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".progress-fill").forEach((bar) => {
              const width = bar.dataset.width || "0";
              setTimeout(() => { bar.style.width = width + "%"; }, 300);
            });
            entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
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
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
          <p className="section-tag mb-3">// 02. skills</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            My <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Technologies I use to turn ideas into production-grade applications.
          </p>
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-surface-raised border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div
          className="reveal"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.4s" }}
        >
          <p className="mono text-xs text-muted-foreground mb-4"><br></br><br></br>// also_worked_with</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span key={tech} className="skill-badge px-3 py-1.5 rounded-lg text-xs cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
