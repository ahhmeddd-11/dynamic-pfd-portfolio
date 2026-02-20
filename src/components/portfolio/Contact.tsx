import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", handle: "@ahhmeddd-11", href: "https://github.com/ahhmeddd-11" },
  { icon: Linkedin, label: "LinkedIn", handle: "Syed Ahmed Ali", href: "https://www.linkedin.com/in/ahhmeddd" },
  { icon: Twitter, label: "Twitter", handle: "@ahhmeddd11", href: "https://x.com/ahhmeddd11" },
  { icon: Mail, label: "Email", handle: "syedahmed4957@gmail.com", href: "mailto:syedahmed4957@gmail.com" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xaqddpjv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setForm({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div
          className="mb-16 reveal"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
        >
          <p className="section-tag mb-3">// 05. contact</p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Have a project in mind or just want to chat? I'm always open to new
            opportunities and interesting conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* reach_me */}
            <div
              className="reveal card-glass rounded-2xl p-6 space-y-4"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.1s" }}
            >
              <p className="mono text-xs text-primary mb-2">// reach_me</p>

              {[
                { icon: Mail, label: "Email", value: "syedahmed4957@gmail.com", href: "mailto:syedahmed4957@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 80734 64452", href: "tel:+918073464452" },
                { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="mono text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* find_me_online */}
            <div
              className="reveal card-glass rounded-2xl p-6"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
            >
              <p className="mono text-xs text-primary mb-4">// find_me_online</p>

              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-overlay border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="mono text-xs text-foreground">{label}</p>
                      <p className="mono text-xs text-muted-foreground truncate">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - FORM */}
          <div
            className="reveal card-glass rounded-2xl p-6 sm:p-8"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="mono text-xs text-muted-foreground block mb-1.5">
                    name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Syed Ahmed Ali"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm mono"
                  />
                </div>

                <div>
                  <label className="mono text-xs text-muted-foreground block mb-1.5">
                    email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="syedahmed4957@gmail.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm mono"
                  />
                </div>
              </div>

              <div>
                <label className="mono text-xs text-muted-foreground block mb-1.5">
                  subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Job opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm mono"
                />
              </div>

              <div>
                <label className="mono text-xs text-muted-foreground block mb-1.5">
                  message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : status === "error"
                    ? "bg-destructive/20 border border-destructive/30 text-destructive"
                    : "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(174_85%_50%/0.4)] hover:scale-[1.02]"
                }`}
              >
                {status === "sending" && (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4" /> Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-4 h-4" /> Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}