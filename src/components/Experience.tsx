const experiences = [
    {
        role: "Project Lead and System Engineer",
        company: "株式会社ONE TERRACE",
        location: "Tokyo, Japan",
        period: "May 2023 — Present",
        current: true,
        highlights: [
            "One Moment Booking Platform: Led rapid full-stack development, delivering the complete product under a critical 30-day deadline with zero security incidents post-launch.",
            "Integrated sophisticated Stripe payment logic for fund management, payment holds, and automated refunds; processed transactions with 99.9% uptime on AWS ECS and RDS.",
            "Quick Sign (Enterprise E-Signature Platform): Led a team of 8 to build a tRPC-powered PDF automation pipeline, eliminating manual document handling and cutting turnaround time by 60%.",
            "Architected scalable cloud infrastructure on AWS S3, ECS, and ECR ensuring 99.9% uptime and document integrity.",
            "Web Development & Infrastructure: Delivered a promotional Astro website within a 5-day deadline; engineered pixel-perfect UI from Figma for a Next.js recruitment platform.",
            "Tokumane Migrant Worker Management: Co-led security improvements for Spring Microservice, Redis, and .NET systems — identified and patched 100+ critical vulnerabilities.",
            "Implemented CI/CD pipelines to Sakura/Onamae Servers and architected serverless email infrastructure using AWS Lambda and SES.",
        ],
    },
    {
        role: "System Engineer",
        company: "Bliss Stock Co., Ltd",
        location: "Tokyo, Japan (Remote)",
        period: "Dec 2021 — Apr 2023",
        current: false,
        highlights: [
            "Online Learning Management System (Pyinnyar-Subuu): Spearheaded development of a comprehensive LMS with a team of 6 using Java Spring Boot and PostgreSQL.",
            "Employee Evaluation System: Developed and deployed using Node.js and Prisma; ensured smooth server deployment and maintenance.",
            "Call Center Management System: Successfully led the handover and subsequent optimization, implementing ongoing maintenance and performance enhancements.",
        ],
    },
];

const education = [
    {
        degree: "Bachelor of Science in Computer Science (BS-CS)",
        institution: "University of the People",
        location: "California, US",
        period: "2022 — 2024",
        note: "Graduated with Cum Laude honors in 2024. Completed degree while working full-time as a Systems Engineer. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.",
    },
    {
        degree: "Bachelor of Computer Science (Transferred)",
        institution: "University of Computer Studies, Mandalay (UCSM)",
        location: "Mandalay, Myanmar",
        period: "2017 — 2020",
        note: "Led the UCSM Technology Committee (UCSMTC), organizing knowledge-sharing events; competed in ICPC; participated in TF-SCALE leadership exchange with Singapore Polytechnic.",
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
