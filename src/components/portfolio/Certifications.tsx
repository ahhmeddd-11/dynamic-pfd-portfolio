import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Delotte Australia - Data Analytics Job Simulation",
    issuer: "Forage / Deloitte",
    date: "June 2025",
    credentialId: "NA",
    badge: "📊",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_su2pbdCcN3nMsrf7P_1749280992203_completion_certificate.pdf",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "June 2025",
    credentialId: "PCEP-30-0X-XXXXXX",
    badge: "☁️",
    color: "from-primary/20 to-cyan-500/10",
    border: "border-primary/20",
    link: "https://www.credly.com/badges/fcf7989a-36ff-43b1-9224-6480098bbab6/",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft / LinkedIn Learning",
    date: "May 2025",
    credentialId: "COURSERA-XXXXXXXX",
    badge: "✨",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    link: "https://www.linkedin.com/learning/certificates/013b267c71e6fd75052418319ea16049781d89e717e660c6d5b6a47fa6bcd4fc?trk=share_certificate",
  },
  {
    title: "Google Analytics",
    issuer: "Google",
    date: "August 2025",
    credentialId: "DCA-XXXXXX",
    badge: "📈",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    link: "https://skillshop.credential.net/778d8f65-3895-487d-bb7d-c01a45f9183b",
  },
  {
    title: "Tata - Gen AI Powered Data Analytics Job Simulation",
    issuer: "Forage / Tata Consultancy Services",
    date: "June 2025",
    credentialId: "GCP-ACE-XXXXXX",
    badge: "🤖",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/20",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_su2pbdCcN3nMsrf7P_1751220021746_completion_certificate.pdf",
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    date: "July 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "🧠",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.coursera.org/account/accomplishments/verify/5X9PS8UF8WJW",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "August 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "🐍",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.hackerrank.com/certificates/9512b13c0126",
  },
  {
    title: "Learning Microsoft Power BI",
    issuer: "Infosys Springboard",
    date: "June 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "📊",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.linkedin.com/posts/ahhmeddd_infosys-certificate-learning-microsoft-activity-7340431582945583104-G8Oa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLnKNsBO8IReYPz736dDJkTmnA3_DfOm4E",
  },
  {
    title: "Microsoft Excel for Data Analyst",
    issuer: "Infosys Springboard",
    date: "June 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "📈",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.linkedin.com/posts/ahhmeddd_microsoft-excel-for-data-analyst-activity-7341496584305577984-7xIF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLnKNsBO8IReYPz736dDJkTmnA3_DfOm4E",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "August 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "🗄️",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.hackerrank.com/certificates/2f00fc971e3b",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn",
    date: "May 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "📘",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.linkedin.com/posts/ahhmeddd_syed-ahmed-ali-has-successfully-completed-activity-7333548876567597058-DlgD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLnKNsBO8IReYPz736dDJkTmnA3_DfOm4E",
  },
  {
    title: "Python Programming",
    issuer: "Reliance Foundation",
    date: "May 2025",
    credentialId: "META-REACT-XXXXXX",
    badge: "🐍",
    color: "from-blue-400/20 to-cyan-400/10",
    border: "border-blue-400/20",
    link: "https://www.linkedin.com/posts/ahhmeddd_certificate-python-programming-activity-7329814822554873856-_y4N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLnKNsBO8IReYPz736dDJkTmnA3_DfOm4E",
  }
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
