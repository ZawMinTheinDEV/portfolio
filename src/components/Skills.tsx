const skills = [
    {
        title: "Front-End Development",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        items: [
            "Next.js / React.js",
            "TypeScript / JavaScript",
            "Tailwind CSS",
            "Responsive UI Design",
            "Component Architecture",
        ],
    },
    {
        title: "Back-End & APIs",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        items: [
            "Node.js / Nest.js",
            "Java Spring Boot",
            "PHP / Laravel",
            "REST APIs",
            "PostgreSQL / MySQL",
        ],
    },
    {
        title: "Cloud & Infrastructure",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        items: [
            "Amazon Web Services (AWS)",
            "Google Cloud Platform (GCP)",
            "Sakura Server",
            "CI/CD Pipelines",
            "Docker / Server Deployment",
        ],
    },
    {
        title: "Tools & Practices",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        items: [
            "Git / GitHub",
            "Stripe Payment Integration",
            "Prisma ORM",
            "Agile / Project Leadership",
            "Code Review & Mentorship",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                padding: "7rem 2rem",
                position: "relative",
                zIndex: 2,
            }}
        >
            <div className="section-container">
                <div className="reveal">
                    <p className="section-label">What I Do Best</p>
                    <h2 className="section-title">
                        Core <span>Skills</span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className={`glass-card reveal delay-${i + 1}`}
                            style={{ padding: "2rem" }}
                        >
                            <div
                                style={{
                                    color: "var(--cyan)",
                                    marginBottom: "1.25rem",
                                    width: "56px",
                                    height: "56px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "var(--cyan-glow)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(34, 211, 238, 0.2)",
                                }}
                            >
                                {skill.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                    marginBottom: "1.25rem",
                                    color: "var(--text-primary)",
                                }}
                            >
                                {skill.title}
                            </h3>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {skill.items.map((item, j) => (
                                    <li
                                        key={j}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.6rem",
                                            color: "var(--text-secondary)",
                                            fontSize: "0.875rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "5px",
                                                height: "5px",
                                                borderRadius: "50%",
                                                background: "var(--cyan)",
                                                flexShrink: 0,
                                            }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Tech badges */}
                <div
                    className="reveal"
                    style={{
                        marginTop: "3rem",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                    }}
                >
                    {[
                        "Next.js", "React", "TypeScript", "Node.js", "Nest.js",
                        "Java", "Spring Boot", "AWS", "GCP", "PostgreSQL",
                        "MySQL", "Stripe", "PHP", "Laravel", "Prisma", "Git",
                    ].map((tech) => (
                        <span key={tech} className="cyan-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
