"use client";

import { useEffect, useRef } from "react";

const terminalLines = [
    { prompt: "~/portfolio $", cmd: "whoami", delay: 400 },
    { text: "zaw-min-thein", delay: 700 },
    { prompt: "~/portfolio $", cmd: "cat skills.json", delay: 1200 },
    { text: '[ "TypeScript", "Java", "PHP", "Python", "Next.js", "AWS" ]', delay: 1500 },
    { prompt: "~/portfolio $", cmd: "echo $YEARS_EXP", delay: 2000 },
    { text: "4.5+ years · Production-Grade Engineering", delay: 2300, cyan: true },
    { prompt: "~/portfolio $", cmd: "_", delay: 2800, cursor: true },
];

export default function Hero() {
    const termRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lines = termRef.current?.querySelectorAll<HTMLElement>(".term-line");
        lines?.forEach((line) => {
            const delay = parseInt(line.dataset.delay || "0");
            setTimeout(() => {
                line.style.opacity = "1";
                line.style.transform = "translateY(0)";
            }, delay);
        });
    }, []);

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "8rem 2rem 6rem",
                position: "relative",
                overflow: "hidden",
                zIndex: 2,
            }}
        >
            {/* Grid lines background */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 2,
                }}
                className="hero-grid"
            >
                {/* Left: Text */}
                <div>
                    <div
                        className="reveal visible"
                        style={{
                            marginBottom: "1.25rem",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.85rem",
                                color: "var(--cyan)",
                                fontWeight: 500,
                                letterSpacing: "0.1em",
                            }}
                        >
                            Hi, I am
                        </span>
                    </div>

                    <h1
                        className="reveal visible"
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Zaw Min{" "}
                        <span
                            style={{
                                color: "var(--cyan)",
                                textShadow: "0 0 40px rgba(34, 211, 238, 0.4)",
                            }}
                        >
                            Thein
                        </span>
                    </h1>

                    <h2
                        className="reveal visible delay-1"
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.4rem)",
                            fontWeight: 400,
                            color: "var(--text-secondary)",
                            marginBottom: "1.75rem",
                            letterSpacing: "0.02em",
                        }}
                    >
                        Project Lead &amp; System Engineer
                    </h2>

                    <p
                        className="reveal visible delay-2"
                        style={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.8,
                            fontSize: "1rem",
                            maxWidth: "680px",
                            marginBottom: "2.5rem",
                        }}
                    >
                        Lead Systems Engineer & Full-Stack Developer with 4.5+ years of experience building and shipping production-
                        grade web applications across TypeScript, Java, Python and PHP. I lead teams of up to 8 engineers by staying
                        hands-on, owning architecture decisions, CI/CD pipelines, and cloud infrastructure on AWS and GCP while
                        remaining active in the codebase. Known for delivering under pressure, mentoring teams through rigorous code
                        reviews, and turning complex requirements into clean, scalable software.
                        <span style={{ color: "var(--cyan)", fontWeight: 500 }}>
                            株式会社ONE TERRACE
                        </span>{" "}
                        in Tokyo, Japan.
                    </p>

                    <div
                        className="reveal visible delay-3"
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                        <a href="#projects" className="btn-primary">
                            <span>View Projects</span>
                        </a>
                    </div>

                    {/* Social links */}
                    <div
                        className="reveal visible delay-4"
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            marginTop: "2.5rem",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="https://github.com/ZawMinTheinDEV"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--text-muted)",
                                transition: "color 0.2s",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                textDecoration: "none",
                                fontSize: "0.85rem",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                                "var(--text-muted)")
                            }
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/zawmintheindev"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--text-muted)",
                                transition: "color 0.2s",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                textDecoration: "none",
                                fontSize: "0.85rem",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                                "var(--text-muted)")
                            }
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="mailto:zmtk2001@gmail.com"
                            style={{
                                color: "var(--text-muted)",
                                transition: "color 0.2s",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                textDecoration: "none",
                                fontSize: "0.85rem",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                                "var(--text-muted)")
                            }
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Email
                        </a>
                    </div>
                </div>

                {/* Right: Terminal */}
                <div
                    className="reveal visible delay-2 hero-terminal"
                    style={{ position: "relative" }}
                >
                    {/* Glow backdrop */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-20px",
                            background:
                                "radial-gradient(ellipse, rgba(34,211,238,0.12) 0%, transparent 70%)",
                            borderRadius: "20px",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            background: "#0d1117",
                            border: "1px solid rgba(34, 211, 238, 0.2)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow:
                                "0 0 60px rgba(34, 211, 238, 0.08), 0 20px 60px rgba(0,0,0,0.5)",
                            position: "relative",
                        }}
                    >
                        {/* Terminal header */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.75rem 1rem",
                                background: "#161b22",
                                borderBottom: "1px solid rgba(34, 211, 238, 0.1)",
                            }}
                        >
                            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                            <span
                                style={{
                                    marginLeft: "0.5rem",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: "0.75rem",
                                    color: "var(--text-muted)",
                                }}
                            >
                                zmt@portfolio ~ bash
                            </span>
                        </div>
                        {/* Terminal body */}
                        <div
                            ref={termRef}
                            style={{
                                padding: "1.5rem",
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.85rem",
                                lineHeight: 2,
                                minHeight: "240px",
                            }}
                        >
                            {terminalLines.map((line, i) => (
                                <div
                                    key={i}
                                    className="term-line"
                                    data-delay={line.delay}
                                    style={{
                                        opacity: 0,
                                        transform: "translateY(6px)",
                                        transition: "opacity 0.4s ease, transform 0.4s ease",
                                        display: "flex",
                                        gap: "0.5rem",
                                    }}
                                >
                                    {line.prompt && (
                                        <>
                                            <span style={{ color: "var(--cyan)", userSelect: "none" }}>
                                                {line.prompt}
                                            </span>
                                            <span style={{ color: "#e2e8f0" }}>{line.cmd}</span>
                                        </>
                                    )}
                                    {line.text && (
                                        <span
                                            style={{
                                                color: line.cyan ? "var(--cyan)" : "#94a3b8",
                                                paddingLeft: line.prompt ? 0 : "0",
                                            }}
                                        >
                                            {line.text}
                                        </span>
                                    )}
                                    {line.cursor && (
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "10px",
                                                height: "1.2em",
                                                background: "var(--cyan)",
                                                marginLeft: "-0.5rem",
                                                verticalAlign: "middle",
                                                animation: "blink 1s step-end infinite",
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-terminal {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
