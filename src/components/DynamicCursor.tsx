import { useEffect, useRef } from "react";

export default function DynamicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 13}px, ${pos.current.y - 13}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const interactives = document.querySelectorAll("a, button");

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursorRef.current?.classList.add("cursor-hover")
      );
      el.addEventListener("mouseleave", () =>
        cursorRef.current?.classList.remove("cursor-hover")
      );
    });
  }, []);

  return <div ref={cursorRef} className="futuristic-cursor" />;
}


/*import { useEffect, useRef } from "react";

export default function DynamicCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      dot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      ring.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll("button, a");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ringRef.current?.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        ringRef.current?.classList.remove("cursor-hover");
      });
    });
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
*/