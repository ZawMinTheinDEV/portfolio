"use client";

import React, { useState } from "react";

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: copied ? "var(--cyan)" : "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "6px",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
                if (!copied) e.currentTarget.style.color = "var(--cyan)";
            }}
            onMouseLeave={(e) => {
                if (!copied) e.currentTarget.style.color = "var(--text-muted)";
            }}
            aria-label="Copy to clipboard"
            title="Copy"
        >
            {copied ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            )}
        </button>
    );
};

const contactItems = [
    {
        label: "Email",
        value: "zmtk2001@gmail.com",
        href: "mailto:zmtk2001@gmail.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "Phone",
        value: "(+81) 080-9633-7393",
        href: "tel:+818096337393",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: "Location",
        value: "Akita, Japan",
        href: null,
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        value: "github.com/ZawMinTheinDEV",
        href: "https://github.com/ZawMinTheinDEV",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/zawmintheindev",
        href: "https://linkedin.com/in/zawmintheindev",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            style={{ padding: "7rem 2rem 5rem", position: "relative", zIndex: 2 }}
        >
            <div className="section-container">
                <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <p className="section-label" style={{ textAlign: "center" }}>
                        Get In Touch
                    </p>
                    <h2 className="section-title" style={{ textAlign: "center" }}>
                        Let&apos;s <span>Connect</span>
                    </h2>
                    <div className="section-divider" style={{ margin: "1.5rem auto 1.5rem" }} />
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            maxWidth: "520px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                        }}
                    >
                        I am open to new opportunities and collaborations. Whether you have a
                        project in mind or just want to say hello — my inbox is always open.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1rem",
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    {contactItems.map((item, i) => {
                        const inner = (
                            <>
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "10px",
                                        background: "var(--cyan-glow)",
                                        border: "1px solid rgba(34,211,238,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--cyan)",
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--text-muted)",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            marginBottom: "0.2rem",
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.9rem",
                                            fontWeight: 500,
                                            color: item.href ? "var(--cyan)" : "var(--text-primary)",
                                        }}
                                    >
                                        {item.value}
                                    </div>
                                </div>
                            </>
                        );

                        return item.href ? (
                            <a
                                key={i}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`glass-card reveal delay-${(i % 3) + 1}`}
                                style={{
                                    padding: "1.25rem 1.5rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textDecoration: "none",
                                }}
                            >
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    {inner}
                                </div>
                                <CopyButton text={item.value} />
                            </a>
                        ) : (
                            <div
                                key={i}
                                className={`glass-card reveal delay-${(i % 3) + 1}`}
                                style={{
                                    padding: "1.25rem 1.5rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    {inner}
                                </div>
                                <CopyButton text={item.value} />
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}

            </div>
        </section>
    );
}
