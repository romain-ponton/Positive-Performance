// src/ui/AnimatedBackground.jsx
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;

    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      targetX = (e.clientX / w - 0.5) * 2; // -1..1
      targetY = (e.clientY / h - 0.5) * 2;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;

      // applique un offset global
      el.style.setProperty("--mx", curX.toFixed(3));
      el.style.setProperty("--my", curY.toFixed(3));

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="pp-bg" aria-hidden>
      <img className="pp-bg__net pp-bg__net--tl" src="/img/net-1.png" alt="" />
      <img className="pp-bg__net pp-bg__net--tr" src="/img/net-2.png" alt="" />
      <img className="pp-bg__net pp-bg__net--bl" src="/img/net-3.png" alt="" />
      <div className="pp-bg__grain" />
      <div className="pp-bg__glow" />
    </div>
  );
}
