const projects = [
    {
        name: "Politician Support System",
        description:
            "A complete platform enabling secure online political donations. Designed and built end-to-end using Next.js server actions and Stripe for PCI-compliant payment processing.",
        stack: ["Next.js", "Server Actions", "Stripe", "TypeScript"],
        category: "Full-Stack",
    },
    {
        name: "Study Karate — Online Learning Platform",
        description:
            "An interactive online learning system for karate, featuring multimedia slides and progress tracking. Co-developed both front-end and back-end, with full AWS deployment.",
        stack: ["Next.js", "Nest.js", "AWS", "PostgreSQL"],
        category: "Full-Stack",
    },
    {
        name: "Tokumane Security Hardening",
        description:
            "Led the security team for the Tokumane platform post-handover. Identified and patched critical vulnerabilities, enforced OWASP best practices, and reduced attack surface significantly.",
        stack: ["Security Audit", "Node.js", "CI/CD"],
        category: "Security",
    },
    {
        name: "Pyinnyar-Subuu LMS",
        description:
            "Spearheaded development of a full-featured Online Learning Management System from scratch. Designed the database schema and REST API layer, managed server deployment.",
        stack: ["Java Spring Boot", "PostgreSQL", "REST API"],
        category: "Back-End",
    },
    {
        name: "Call Center Management System",
        description:
            "Managed the full handover, then led ongoing maintenance and optimisation of a production call centre management platform serving a multi-team organisation.",
        stack: ["Node.js", "PostgreSQL", "Prisma"],
        category: "Full-Stack",
    },
    {
        name: "Employee Evaluation System",
        description:
            "Built an internal employee performance evaluation tool with role-based access control. Handled deployment and continuous server maintenance.",
        stack: ["Node.js", "Prisma", "PostgreSQL"],
        category: "Back-End",
    },
];

const categoryColors: Record<string, string> = {
    "Full-Stack": "var(--cyan)",
    "Back-End": "#a78bfa",
    Security: "#f59e0b",
};

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: "7rem 2rem",
                position: "relative",
                zIndex: 2,
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.02) 50%, transparent 100%)",
            }}
        >
            <div className="section-container">
                <div className="reveal">
                    <p className="section-label">What I Have Built</p>
                    <h2 className="section-title">
                        Featured <span>Projects</span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className={`glass-card reveal delay-${(i % 3) + 1}`}
                            style={{
                                padding: "1.75rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                cursor: "default",
                            }}
                        >
                            {/* Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "10px",
                                        background: "var(--cyan-glow)",
                                        border: "1px solid rgba(34,211,238,0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--cyan)",
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                </div>
                                <span
                                    style={{
                                        padding: "0.2rem 0.6rem",
                                        borderRadius: "100px",
                                        fontSize: "0.7rem",
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontWeight: 500,
                                        color: categoryColors[proj.category] || "var(--cyan)",
                                        background: `${categoryColors[proj.category] || "var(--cyan)"}18`,
                                        border: `1px solid ${categoryColors[proj.category] || "var(--cyan)"}30`,
                                    }}
                                >
                                    {proj.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                    color: "var(--text-primary)",
                                    lineHeight: 1.3,
                                }}
                            >
                                {proj.name}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.85rem",
                                    lineHeight: 1.7,
                                    flex: 1,
                                }}
                            >
                                {proj.description}
                            </p>

                            {/* Stack */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {proj.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            borderRadius: "4px",
                                            fontSize: "0.72rem",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
