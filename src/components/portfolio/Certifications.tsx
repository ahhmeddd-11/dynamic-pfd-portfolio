import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  /*{
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-C03-XXXXXX",
    badge: "☁️",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    link: "#",
  },
  {
    title: "Python Institute PCEP",
    issuer: "Python Institute",
    date: "2022",
    credentialId: "PCEP-30-0X-XXXXXX",
    badge: "🐍",
    color: "from-primary/20 to-cyan-500/10",
    border: "border-primary/20",
    link: "#",
  },
  {
    title: "Django for Everybody Specialization",
    issuer: "Coursera / University of Michigan",
    date: "2022",
    credentialId: "COURSERA-XXXXXXXX",
    badge: "🎓",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    link: "#",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    credentialId: "DCA-XXXXXX",
    badge: "🐳",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    link: "#",
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-ACE-XXXXXX",
    badge: "🚀",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/20",
    link: "#",
  },
  {
    title: "Meta React Developer Certificate",
    issuer: "Meta / Coursera",
    date: "2023",
    credentialId: "META-REACT-XXXXXX",
    badge: "⚛️",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "#",
  },*/
  {title: "Coming soon...", issuer: "Stay tuned!", date: "", credentialId: "", badge: "⏳", color: "from-gray-500/20 to-gray-500/10", border: "border-gray-500/20", link: "#"}
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
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
    <section id="certifications" ref={sectionRef} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
          <p className="section-tag mb-3">// 03. certifications</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            My <span className="text-gradient">Credentials</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Continuously learning and validating expertise through industry-recognized certifications.
          </p>
        </div>

        {/* Certs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal group relative"
              style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.6s ease ${i * 0.08}s` }}
            >
              <div className={`card-glass rounded-2xl p-6 h-full border ${cert.border} bg-gradient-to-br ${cert.color} backdrop-blur-sm`}>
                {/* Badge and link */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{cert.badge}</div>
                  <a
                    href={cert.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-sm leading-snug">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Award className="w-3 h-3" />
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </p>
                </div>

                {/* Credential ID */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="mono text-xs text-muted-foreground truncate">ID: {cert.credentialId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
