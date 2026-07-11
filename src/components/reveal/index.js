import React, { useEffect, useRef, useState } from "react";

// Scroll-reveal wrapper. Renders `as` (a DOM tag) with a `.reveal` class and
// adds `.in` when it scrolls into view. Falls back to visible immediately when
// IntersectionObserver is unavailable or reduced motion is preferred.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", shown ? "in" : "", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
