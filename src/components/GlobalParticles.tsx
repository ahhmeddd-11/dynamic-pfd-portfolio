import { useEffect, useRef } from "react";

const GlobalParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;

      p.className = "floating-particle";
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 4 + 4}s;
        animation-delay: 0s;
        opacity: 0.6;
      `;

      container.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <div
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default GlobalParticles;
