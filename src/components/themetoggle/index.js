import React, { useEffect } from "react";

// Resolve the active theme from the <html data-theme> attribute, falling back
// to the OS preference when the user hasn't chosen one.
function currentTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const Themetoggle = () => {
  // Restore a saved preference on mount. If none is saved we leave the
  // attribute unset so prefers-color-scheme continues to drive the palette.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nn-theme");
      if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch (e) {
      /* localStorage unavailable — ignore */
    }
  }, []);

  const toggle = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("nn-theme", next);
    } catch (e) {
      /* ignore */
    }
  };

  return (
    <button className="toggle" type="button" aria-label="Toggle color theme" onClick={toggle}>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </svg>
      <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
};

export default Themetoggle;
