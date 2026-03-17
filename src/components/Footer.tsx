export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "2rem",
                textAlign: "center",
                position: "relative",
                zIndex: 2,
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--cyan)",
                    }}
                >
                    ZMT<span style={{ color: "var(--text-secondary)" }}>.dev</span>
                </span>

                <p
                    style={{
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        fontFamily: "'JetBrains Mono', monospace",
                    }}
                >
                    Designed &amp; Built by Zaw Min Thein &mdash; {new Date().getFullYear()}
                </p>

                <div style={{ display: "flex", gap: "1.25rem" }}>
                    {[
                        { label: "GitHub", href: "https://github.com/ZawMinTheinDEV" },
                        { label: "LinkedIn", href: "https://linkedin.com/in/zawmintheindev" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--text-muted)",
                                textDecoration: "none",
                                fontSize: "0.8rem",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                                "var(--text-muted)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
