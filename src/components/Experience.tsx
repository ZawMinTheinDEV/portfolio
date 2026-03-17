const experiences = [
    {
        role: "Project Leader & Full-Stack System Engineer",
        company: "株式会社ONE TERRACE",
        location: "Akita, Japan",
        period: "Aug 2023 — Present",
        current: true,
        highlights: [
            "Lead multiple concurrent projects, manage task assignments and strict deadlines.",
            "Politician Support System: Built a complete online political donation platform using Next.js, server actions, and Stripe.",
            "Tokumane Security: Led the security team to harden the platform, patching vulnerabilities and enforcing best practices.",
            "Study Karate Learning: Co-developed an interactive online learning platform (Next.js front-end, Nest.js back-end, AWS deployment).",
            "Drive core architectural decisions on AWS and Sakura Server; manage automated CI/CD pipelines.",
            "Mentor developers through rigorous code reviews and continuous feedback.",
        ],
    },
    {
        role: "Software Developer",
        company: "BLISS STOCK CO., LTD",
        location: "Tokyo, Japan",
        period: "Dec 2021 — May 2023",
        current: false,
        highlights: [
            "Led the successful handover of the Call Center Management System, ensuring smooth team transition.",
            "Pyinnyar-Subuu LMS: Spearheaded development of an Online Learning Management System using Java Spring Boot and PostgreSQL.",
            "Employee Evaluation System: Built with Node.js and Prisma; managed deployment and server maintenance.",
            "Delivered ongoing maintenance and performance optimisations across all systems.",
        ],
    },
];

const education = [
    {
        degree: "Bachelor of Science — Computer Science",
        institution: "University of the People",
        location: "California, US (Online)",
        period: "Oct 2022 — Aug 2024",
    },
    {
        degree: "Bachelor of Computer Science (Undergraduate)",
        institution: "University of Computer Studies, Mandalay (UCSM)",
        location: "Mandalay, Myanmar",
        period: "2017 — 2020",
        note: "Led UCSMTC technology committee; competed in ICPC; TF-SCALE exchange with Singapore Polytechnic.",
    },
    {
        degree: "Temasek Foundation Leadership Exchange",
        institution: "Singapore Polytechnic",
        location: "Singapore",
        period: "Sep 2019 — Oct 2019",
        note: "Sustainable development leadership program; developed a prototype for coffee farms in Myanmar.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            style={{ padding: "7rem 2rem", position: "relative", zIndex: 2 }}
        >
            <div className="section-container">
                <div className="reveal">
                    <p className="section-label">Where I Worked</p>
                    <h2 className="section-title">
                        Work <span>Experience</span>
                    </h2>
                    <div className="section-divider" />
                </div>

                {/* Timeline */}
                <div
                    style={{
                        position: "relative",
                        paddingLeft: "2rem",
                        marginBottom: "5rem",
                    }}
                >
                    {/* Vertical line */}
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: "1px",
                            background: "linear-gradient(180deg, var(--cyan), transparent)",
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`reveal delay-${i + 1}`}
                            style={{
                                position: "relative",
                                marginBottom: i < experiences.length - 1 ? "3rem" : 0,
                            }}
                        >
                            {/* Dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "-2.38rem",
                                    top: "0.3rem",
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: exp.current ? "var(--cyan)" : "var(--bg-card)",
                                    border: "2px solid var(--cyan)",
                                    boxShadow: exp.current ? "0 0 12px rgba(34,211,238,0.6)" : "none",
                                }}
                            />

                            <div className="glass-card" style={{ padding: "1.75rem 2rem" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: 700,
                                                color: "var(--text-primary)",
                                                marginBottom: "0.25rem",
                                            }}
                                        >
                                            {exp.role}
                                        </h3>
                                        <div
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "var(--cyan)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {exp.company}
                                            <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem", fontWeight: 400 }}>
                                                · {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        {exp.current && (
                                            <span
                                                style={{
                                                    padding: "0.2rem 0.6rem",
                                                    background: "rgba(34,211,238,0.12)",
                                                    border: "1px solid rgba(34,211,238,0.3)",
                                                    borderRadius: "100px",
                                                    color: "var(--cyan)",
                                                    fontSize: "0.7rem",
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                Current
                                            </span>
                                        )}
                                        <span
                                            style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: "0.78rem",
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {exp.highlights.map((h, j) => (
                                        <li
                                            key={j}
                                            style={{
                                                display: "flex",
                                                gap: "0.75rem",
                                                color: "var(--text-secondary)",
                                                fontSize: "0.875rem",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "var(--cyan)",
                                                    flexShrink: 0,
                                                    marginTop: "0.25rem",
                                                }}
                                            >
                                                ›
                                            </span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="reveal">
                    <p className="section-label">Academic Background</p>
                    <h2 className="section-title">
                        <span>Education</span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {education.map((edu, i) => (
                        <div
                            key={i}
                            className={`glass-card reveal delay-${i + 1}`}
                            style={{
                                padding: "1.5rem 2rem",
                                display: "flex",
                                gap: "1.5rem",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: "var(--cyan-glow)",
                                    border: "1px solid rgba(34,211,238,0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    color: "var(--cyan)",
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "0.25rem",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                                        {edu.degree}
                                    </h3>
                                    <span
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: "0.75rem",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        {edu.period}
                                    </span>
                                </div>
                                <div style={{ fontSize: "0.85rem", color: "var(--cyan)", fontWeight: 500, marginBottom: "0.25rem" }}>
                                    {edu.institution}
                                    <span style={{ color: "var(--text-muted)", fontWeight: 400, marginLeft: "0.5rem" }}>
                                        · {edu.location}
                                    </span>
                                </div>
                                {edu.note && (
                                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                        {edu.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
