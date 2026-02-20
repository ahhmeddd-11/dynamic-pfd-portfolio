import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  /*{
    title: "PyCommerce API",
    description:
      "High-performance e-commerce REST API built with FastAPI & PostgreSQL. Features JWT auth, Stripe payments, Redis caching, and async task queues with Celery.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "AWS"],
    github: "#",
    live: "#",
    stars: 284,
    forks: 47,
    status: "Production",
    featured: true,
  },
  {
    title: "DataFlow Dashboard",
    description:
      "Real-time analytics dashboard for processing millions of events/day. Python backend with WebSockets for live data streaming and React frontend with D3.js charts.",
    tags: ["Django", "WebSockets", "React", "D3.js", "Kafka", "PostgreSQL"],
    github: "#",
    live: "#",
    stars: 156,
    forks: 28,
    status: "Production",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "SaaS platform leveraging OpenAI APIs for automated content creation. Built with FastAPI microservices, React frontend, and Stripe subscription billing.",
    tags: ["FastAPI", "OpenAI", "React", "Stripe", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    stars: 421,
    forks: 89,
    status: "Live SaaS",
    featured: true,
  },
  {
    title: "DevTask Manager",
    description:
      "Full-featured project management tool with Kanban boards, GitHub integration, and team collaboration. Django REST Framework backend with React frontend.",
    tags: ["Django", "DRF", "React", "TypeScript", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
    stars: 98,
    forks: 15,
    status: "Open Source",
    featured: false,
  },
  {
    title: "CloudMonitor CLI",
    description:
      "Python CLI tool for monitoring AWS resources, costs, and alerts. Integrates with CloudWatch, sends Slack/email notifications, and generates cost reports.",
    tags: ["Python", "AWS", "Boto3", "Click", "Rich", "Slack API"],
    github: "#",
    live: null,
    stars: 312,
    forks: 41,
    status: "Open Source",
    featured: false,
  },
  {
    title: "FastAuth Service",
    description:
      "Production-ready authentication microservice with OAuth2, JWT, MFA, and social login. Plug-and-play for any Python application.",
    tags: ["FastAPI", "OAuth2", "JWT", "Redis", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    stars: 537,
    forks: 112,
    status: "Open Source",
    featured: false,
  },*/
  {title: "Coming Soon", description: "Exciting projects are in the works! Stay tuned for updates.", tags: ["Stay Tuned"], github: "#", live: null, stars: 0, forks: 0, status: "Production", featured: false},
];

const filters = ["All", "Production", "Open Source", "Live SaaS"];

const statusColor: Record<string, string> = {
  Production: "text-primary border-primary/30 bg-primary/10",
  "Live SaaS": "text-accent border-accent/30 bg-accent/10",
  "Open Source": "text-green-400 border-green-400/30 bg-green-400/10",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
          <p className="section-tag mb-3">// 04. projects</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A selection of projects from simple tools to production SaaS platforms.
          </p>
        </div>

        {/* Filters */}
        <div
          className="reveal flex flex-wrap gap-2 mb-10"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.1s" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full mono text-xs border transition-all duration-200 ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal group card-glass rounded-2xl p-6 flex flex-col"
              style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.6s ease ${i * 0.08}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <span className={`mono text-xs px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}>
                  {project.status}
                </span>
                <div className="flex items-center gap-2">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="mono text-xs px-2 py-0.5 rounded bg-surface-overlay text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-3 border-t border-border">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="w-3.5 h-3.5" /> {project.stars}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <GitFork className="w-3.5 h-3.5" /> {project.forks}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className="reveal mt-10 text-center"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.5s" }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 mono text-sm"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
