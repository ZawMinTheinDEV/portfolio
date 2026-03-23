const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Production Projects" },
    { value: "4", label: "Languages Spoken" },
    { value: "8", label: "Engineers Mentored" },
];

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: "7rem 2rem",
                position: "relative",
                zIndex: 2,
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.02) 50%, transparent 100%)",
            }}
        >
            <div className="section-container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "5rem",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    {/* Left: Text */}
                    <div>
                        <div className="reveal">
                            <p className="section-label">Who I Am</p>
                            <h2 className="section-title">
                                About <span>Me</span>
                            </h2>
                            <div className="section-divider" />
                        </div>

                        <div className="reveal delay-1">
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.9,
                                    marginBottom: "1.25rem",
                                    fontSize: "0.95rem",
                                }}
                            >
                                Shipped a production booking platform in 30 days with zero post-launch
                                security incidents — one example of 5+ years delivering
                                production-grade web applications across TypeScript, Java, Python, and
                                PHP. Leading teams of up to 8 engineers while staying hands-on, owning
                                architecture decisions, CI/CD pipelines, and cloud infrastructure on
                                AWS and GCP.
                            </p>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.9,
                                    marginBottom: "1.25rem",
                                    fontSize: "0.95rem",
                                }}
                            >
                                I specialise in delivering high-quality, scalable solutions using
                                Next.js, Node.js, and Java Spring Boot — paired with cloud deployment
                                on AWS and GCP. Known for delivering under pressure, mentoring teams
                                through rigorous code reviews, and turning complex requirements into
                                clean, scalable software.
                            </p>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                }}
                            >
                                When not shipping features, I enjoy helping others and sharing knowledge — a value rooted in my time leading
                                the UCSMTC technology committee at UCSM.
                            </p>
                        </div>

                        {/* Languages */}
                        <div className="reveal delay-2" style={{ marginTop: "2rem" }}>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    color: "var(--text-muted)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Languages
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                                {[
                                    { lang: "English", level: "Fluent" },
                                    { lang: "Burmese", level: "Native" },
                                    { lang: "Japanese", level: "N4" },
                                    { lang: "Hindi", level: "Conversational" },
                                ].map(({ lang, level }) => (
                                    <div
                                        key={lang}
                                        style={{
                                            padding: "0.4rem 0.9rem",
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "6px",
                                            fontSize: "0.8rem",
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        <span style={{ color: "var(--cyan)" }}>{lang}</span>
                                        <span style={{ color: "var(--text-muted)", marginLeft: "0.4rem" }}>
                                            · {level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats & Certifications */}
                    <div>
                        {/* Stats */}
                        <div
                            className="reveal delay-1"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1rem",
                                marginBottom: "2rem",
                            }}
                        >
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="glass-card"
                                    style={{
                                        padding: "1.5rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "2.5rem",
                                            fontWeight: 900,
                                            color: "var(--cyan)",
                                            lineHeight: 1,
                                            marginBottom: "0.5rem",
                                            textShadow: "0 0 20px rgba(34,211,238,0.4)",
                                        }}
                                    >
                                        {s.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--text-muted)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="reveal delay-2">
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    color: "var(--text-muted)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    marginBottom: "1rem",
                                }}
                            >
                                Certifications
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    {
                                        name: "基本情報技術者試験 (FE)",
                                        note: "ITPEC Fundamental IT Engineer",
                                        year: "2022",
                                    },
                                    {
                                        name: "TOEIC",
                                        note: "Test of English for International Communication",
                                        year: "",
                                    },
                                ].map((cert) => (
                                    <div
                                        key={cert.name}
                                        className="glass-card"
                                        style={{
                                            padding: "1rem 1.25rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                background: "var(--cyan)",
                                                flexShrink: 0,
                                                boxShadow: "0 0 8px var(--cyan)",
                                            }}
                                        />
                                        <div>
                                            <div
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: "0.9rem",
                                                    color: "var(--text-primary)",
                                                }}
                                            >
                                                {cert.name}
                                                {cert.year && (
                                                    <span
                                                        style={{
                                                            marginLeft: "0.5rem",
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.75rem",
                                                            color: "var(--cyan)",
                                                        }}
                                                    >
                                                        {cert.year}
                                                    </span>
                                                )}
                                            </div>
                                            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                                                {cert.note}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
