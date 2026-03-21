"use client";

import { useState, useEffect } from "react";
import {
    FiBookOpen,
    FiUsers,
    FiHeadphones,
    FiVideo,
    FiShield,
    FiBriefcase,
    FiFileText,
    FiMonitor,
    FiGlobe,
    FiUserPlus,
    FiPenTool,
    FiCpu,
    FiCalendar,
    FiClock,
    FiServer,
    FiCode,
    FiGitMerge,
    FiExternalLink
} from "react-icons/fi";
import { FaAws, FaJava, FaWindows, FaApple, FaReact, FaNodeJs, FaPhp, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiAstro, SiNestjs, SiSpringboot, SiMysql } from "react-icons/si";

const techIcons: Record<string, React.ElementType> = {
    "Next.js": SiNextdotjs,
    "React.js": FaReact,
    "React": FaReact,
    "AWS": FaAws,
    "Laravel": SiLaravel,
    "AI/OCR": FiCpu,
    "Astro": SiAstro,
    "Onmae Server": FiServer,
    "Sakura Server": FiServer,
    "Web App Dev": FiCode,
    "Mac": FaApple,
    "Java": FaJava,
    "Vue.js": FaVuejs,
    "CI/CD": FiGitMerge,
    "Nest.js": SiNestjs,
    "PHP": FaPhp,
    "Node.js": FaNodeJs,
    "Window": FaWindows,
    "Spring Boot": SiSpringboot,
    "MySQL": SiMysql,
};

const projects = [
    {
        name: "Virtual Career",
        description: "Developed a robust scheduling system for users to book and coordinate meetings with other users seamlessly on the platform.",
        stack: ["Next.js", "React.js", "AWS"],
        category: "Full-Stack",
        icon: FiClock,
        order: 1,
        link: "",
    },
    {
        name: "One Moment",
        description: "Built a mall-style reservation management system acting as a platform to connect general users with services (experiences/locations) offered by multiple businesses.",
        stack: ["Next.js", "React.js", "AWS"],
        category: "Full-Stack",
        icon: FiCalendar,
        order: 2,
        link: "https://one-moment.jp/",
    },
    {
        name: "Katakata",
        description: "Developed a system leveraging AI (OCR & NLP) to automatically extract pricing information from catalogs into a database, vastly improving searchability and reducing manual entry work.",
        stack: ["React.js", "Laravel", "AWS", "AI/OCR"],
        category: "Full-Stack",
        icon: FiCpu,
        order: 3,
        link: "",
    },
    {
        name: "Quick Sign",
        description: "A system that streamlines procedures through electronic signatures. Optimized business operations by enabling rapid and accurate document processing.",
        stack: ["Next.js", "React.js", "AWS"],
        category: "Full-Stack",
        icon: FiPenTool,
        order: 4,
        link: "",
    },
    {
        name: "Candidate Management System",
        description: "Designed and developed a system enabling job seekers to search and apply for jobs. Handled the entire lifecycle from frontend to backend and AWS deployment.",
        stack: ["Next.js", "React.js", "AWS"],
        category: "Full-Stack",
        icon: FiUserPlus,
        order: 5,
        link: "",
    },
    {
        name: "Saison Japanese Learning Website",
        description: "Constructed and operated a website aimed at providing comprehensive service information for Japanese language learning.",
        stack: ["Astro", "React.js", "Onmae Server"],
        category: "Front-End",
        icon: FiGlobe,
        order: 6,
        link: "https://saisonjplesson.oneterrace.jp/en/individual/",
    },
    {
        name: "One Channel Website",
        description: "Developed an information broadcasting and community platform. Focused on delivering a user-friendly design and robust content management system.",
        stack: ["Astro", "React.js", "Onmae Server"],
        category: "Front-End",
        icon: FiMonitor,
        order: 7,
        link: "https://one-channel.oneterrace.jp/",
    },
    {
        name: "Taiheiyo Recruitment Website",
        description: "Built and managed a comprehensive recruitment information website. Ensured high performance and reliable deployment on Sakura server.",
        stack: ["Next.js", "React.js", "Sakura Server"],
        category: "Front-End",
        icon: FiFileText,
        order: 8,
        link: "https://recruit.taiheiyo-c.co.jp/",
    },
    {
        name: "Politician Support System",
        description: "A complete platform enabling secure online political donations. Designed and built end-to-end using Next.js. Managed ongoing maintenance and operations.",
        stack: ["Next.js", "Web App Dev", "Mac"],
        category: "Full-Stack",
        icon: FiBriefcase,
        order: 9,
        link: "",
    },
    {
        name: "Tokumame",
        description: "Transferred services, maintained operations, and implemented security hardening using Spring Microservices, Redis, and .NET. Managed infrastructure on AWS.",
        stack: ["Java", "Vue.js", "AWS", "CI/CD"],
        category: "System Dev",
        icon: FiShield,
        order: 10,
        link: "",
    },
    {
        name: "Study Karate",
        description: "An interactive online learning system for karate, featuring multimedia slides and progress tracking. Co-developed both front-end and back-end, with full AWS deployment.",
        stack: ["Next.js", "Nest.js", "AWS"],
        category: "Full-Stack",
        icon: FiVideo,
        order: 11,
        link: "",
    },
    {
        name: "Call Center Management System",
        description: "Managed the full handover, then led ongoing maintenance and optimization of a production call center management platform.",
        stack: ["React", "PHP", "Web App Dev"],
        category: "Full-Stack",
        icon: FiHeadphones,
        order: 12,
        link: "",
    },
    {
        name: "Employee Evaluation System",
        description: "Built an internal employee performance evaluation tool with role-based access control. Handled deployment and continuous server maintenance.",
        stack: ["Node.js", "Web App Dev", "Window"],
        category: "Back-End",
        icon: FiUsers,
        order: 13,
        link: "",
    },
    {
        name: "Pyinnyar-Subuu LMS",
        description: "Spearheaded the development of a full-featured Online Learning Management Platform. Designed database schema and managed Java Springboot development.",
        stack: ["Java", "Spring Boot", "MySQL"],
        category: "System Dev",
        icon: FiBookOpen,
        order: 14,
        link: "",
    },
];

const categoryColors: Record<string, string> = {
    "Full-Stack": "var(--cyan)",
    "Back-End": "#a78bfa",
    "Front-End": "#34d399",
    "System Dev": "#f472b6",
    Security: "#f59e0b",
};

export default function Projects() {
    const [showAll, setShowAll] = useState(false);

    // Sort projects by order, ensuring those without order fall to the end
    const sortedProjects = [...projects].sort((a, b) => (a.order || 999) - (b.order || 999));
    const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 6);

    useEffect(() => {
        const revealElements = document.querySelectorAll("#projects .reveal:not(.visible)");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );
        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [showAll]);

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
                    {visibleProjects.map((proj, i) => {
                        const Icon = proj.icon;

                        return (
                            <div
                                key={i}
                                className={`glass-card reveal delay-${(i % 3) + 1}`}
                                style={{
                                    padding: "1.75rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    cursor: "default",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    height: "100%",
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
                                        <Icon size={20} />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
                                {proj.link && (
                                    <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                padding: "0.5rem 1rem",
                                                background: "rgba(34,211,238,0.1)",
                                                color: "var(--cyan)",
                                                border: "1px solid rgba(34,211,238,0.2)",
                                                borderRadius: "6px",
                                                fontSize: "0.8rem",
                                                fontWeight: 500,
                                                textDecoration: "none",
                                                transition: "all 0.2s ease",
                                                cursor: "pointer",
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = "rgba(34,211,238,0.2)";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = "rgba(34,211,238,0.1)";
                                            }}
                                        >
                                            <FiExternalLink size={14} /> View Project
                                        </a>
                                    </div>
                                )}
                                {/* Stack */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {proj.stack.map((tech) => {
                                        const TechIcon = techIcons[tech];
                                        return (
                                            <span
                                                key={tech}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    padding: "0.2rem 0.6rem",
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    borderRadius: "4px",
                                                    fontSize: "0.72rem",
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                {TechIcon && <TechIcon size={12} />}
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>


                            </div>
                        );
                    })}
                </div>

                {projects.length > 6 && (
                    <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }} className="reveal">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn-primary"
                        >
                            {showAll ? "Show Less" : "See More Projects"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
