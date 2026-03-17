"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "1rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(10, 15, 30, 0.92)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(34, 211, 238, 0.08)"
                    : "none",
            }}
        >
            {/* Logo */}
            <a
                href="#hero"
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "var(--cyan)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                }}
            >
                ZMT<span style={{ color: "var(--text-primary)" }}>.dev</span>
            </a>

            {/* Desktop links */}
            <div
                style={{
                    display: "flex",
                    gap: "2.5rem",
                    alignItems: "center",
                }}
                className="desktop-nav"
            >
                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        style={{
                            color: "var(--text-secondary)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            letterSpacing: "0.03em",
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.color = "var(--cyan)")
                        }
                        onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                        }
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="https://github.com/ZawMinTheinDEV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
                >
                    <span>GitHub</span>
                </a>
            </div>

            {/* Mobile hamburger */}
            <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                style={{
                    display: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem",
                    color: "var(--cyan)",
                }}
                className="mobile-menu-btn"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {open ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <>
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </>
                    )}
                </svg>
            </button>

            {/* Mobile menu */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        top: "64px",
                        left: 0,
                        right: 0,
                        background: "rgba(10, 15, 30, 0.98)",
                        backdropFilter: "blur(12px)",
                        borderBottom: "1px solid var(--border)",
                        padding: "1.5rem 2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        zIndex: 99,
                    }}
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
