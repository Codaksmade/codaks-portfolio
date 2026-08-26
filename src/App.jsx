import { useEffect, useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

function Github({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Linkedin({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const colors = {
  bg: "#0A0D12",
  bgPanel: "#11151C",
  bgPanelHover: "#151A22",
  border: "#20262F",
  borderBright: "#2E3644",
  textPrimary: "#EDEFF2",
  textSecondary: "#8B93A0",
  textTertiary: "#4E5561",
  accent: "#FFB238",
  deployed: "#3ECF8E",
  progress: "#FFB238",
  research: "#6C8CFF",
};

const projects = [
  {
    name: "Solar Inverter Risk Monitor",
    status: "DEPLOYED",
    tag: "ESP32 · Streamlit · Supabase",
    desc: "Real-time health scoring for solar inverters. Voltage, current, temperature, and five other readings feed a weighted risk model that flags failure before it happens.",
    link: "https://solariskmaintenance.streamlit.app",
    linkLabel: "solariskmaintenance.streamlit.app",
  },
  {
    name: "AI Job Recommender",
    status: "DEPLOYED",
    tag: "Recommendation Systems",
    desc: "Matches candidates to roles using ranking and personalization — a hands-on look at what production recommendation systems need to work end to end.",
    link: "https://jobrecommenderapp.streamlit.app",
    linkLabel: "jobrecommenderapp.streamlit.app",
  },
  {
    name: "Churn Prediction API",
    status: "DEPLOYED",
    tag: "FastAPI · scikit-learn",
    desc: "A served model that scores subscription users on churn risk, wrapped in a lightweight API other services can call directly.",
  },
  {
    name: "Solar Predictive Maintenance System",
    status: "DEPLOYED",
    tag: "Python · scikit-learn · Streamlit",
    desc: "Monitors solar plant performance from generation and weather sensor data. A regression model tracks Performance Ratio while a classifier flags Normal, Warning, or Fault states for early detection.",
    link: "https://solarmaintenanceapp.streamlit.app",
    linkLabel: "solarmaintenanceapp.streamlit.app",
    repo: "https://github.com/Codaksmade/Solar_MAintenance_App",
  },
  {
    name: "Simple Database App",
    status: "DEPLOYED",
    tag: "Full-stack",
    desc: "A small full-stack app for structured data entry and retrieval — the unglamorous CRUD work every larger system quietly depends on.",
  },
  {
    name: "Zenith GetHired Support Agent",
    status: "DEPLOYED",
    tag: "n8n · Telegram · Supabase",
    desc: "A conversational agent for a recruitment company — handles support inquiries, account help, ATS-style CV review against a job description, and job matching, live on Telegram.",
    link: "https://t.me/ZenithGetHired_Bot",
    linkLabel: "@ZenithGetHired_Bot",
  },
];

const buildLog = [
  {
    name: "AI workshop booking agent",
    status: "IN PROGRESS",
    detail:
      "n8n agent that checks calendar availability and books workshop sessions automatically, with WhatsApp and Discord notifications.",
  },
  {
    name: "Disease outbreak prediction pipeline",
    status: "RESEARCH",
    detail:
      "Multi-output model forecasting cholera, malaria, and dengue risk across Nigeria and Ghana from climate and epidemiological data.",
  },
];

const mediumPosts = [
  {
    title: "Does Every ML Problem Need a “Traditional Model”?",
    date: "Jul 28, 2026",
    link: "https://medium.com/@Codaks/does-every-ml-problem-need-a-traditional-model-9bd43870702b",
  },
  {
    title: "Building an AI Job Recommender to End the Endless Scroll",
    date: "Apr 12, 2026",
    link: "https://medium.com/@Codaks/building-an-ai-job-recommender-to-end-the-endless-scroll-5fcd385f61e1",
  },
  {
    title: "Building a Solar Predictive Maintenance App with Streamlit",
    date: "Apr 4, 2026",
    link: "https://medium.com/@Codaks/building-a-solar-predictive-maintenance-app-with-streamlit-fbb1ac458f70",
  },
  {
    title: "Why This Model?",
    date: "Mar 26, 2026",
    link: "https://medium.com/@Codaks/why-this-model-4cae17763f18",
  },
  {
    title: "How I Built a Churn Prediction API",
    date: "Mar 21, 2026",
    link: "https://medium.com/@Codaks/how-i-built-a-churn-prediction-api-e59711dcdfd3",
  },
  {
    title: "End-to-End Predictive Maintenance Using Regression and Classification Models on Solar Energy Data",
    date: "Mar 19, 2026",
    link: "https://medium.com/@Codaks/end-to-end-predictive-maintenance-using-regression-and-classification-models-on-solar-energy-data-17050a8b3f0a",
  },
  {
    title: "How I Built a Churn Prediction API",
    date: "Dec 26, 2025",
    link: "https://medium.com/@Codaks/how-i-built-a-churn-prediction-api-3ff3d6e2aa53",
  },
];

const bootLines = [
  { k: "whoami", v: "codaks" },
  { k: "role", v: "machine learning engineer" },
  { k: "location", v: "nigeria" },
  { k: "education", v: "b.eng. mechatronics — federal university oye-ekiti, 2026" },
  { k: "status", v: "online", accent: true },
];

function StatusBadge({ status }) {
  const color =
    status === "DEPLOYED"
      ? colors.deployed
      : status === "RESEARCH"
      ? colors.research
      : colors.progress;
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-sm"
      style={{
        color,
        border: `1px solid ${color}33`,
        background: `${color}14`,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.04em",
      }}
    >
      <span
        className="inline-block rounded-full"
        style={{ width: 6, height: 6, background: color }}
      />
      {status}
    </span>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        style={{
          color: colors.textTertiary,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
        }}
      >
        {index}
      </span>
      <span style={{ height: 1, width: 32, background: colors.borderBright }} />
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: "0.14em",
          color: colors.textSecondary,
        }}
      >
        {title.toUpperCase()}
      </h2>
    </div>
  );
}

export default function Portfolio() {
  const [uptime, setUptime] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setUptime((u) => u + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (visibleLines >= bootLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 260 + visibleLines * 90);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const mm = String(Math.floor(uptime / 60)).padStart(2, "0");
  const ss = String(uptime % 60).padStart(2, "0");

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.textPrimary,
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(#12161d 1px, transparent 1px), linear-gradient(90deg, #12161d 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundPosition: "-1px -1px",
      }}
      className="font-sans"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
        .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        a { text-decoration: none; }
        ::selection { background: ${colors.accent}33; color: ${colors.textPrimary}; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        .card-hover { transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { border-color: ${colors.borderBright}; background: ${colors.bgPanelHover}; transform: translateY(-2px); }
        .link-hover { transition: color 0.15s ease, gap 0.15s ease; }
        .link-hover:hover { color: ${colors.accent}; }
        .nav-link { transition: color 0.15s ease; }
        .nav-link:hover { color: ${colors.textPrimary}; }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-start infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .fade-line { animation: fadeUp 0.35s ease both; }
      `}</style>

      {/* Nav */}
      <nav
        className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-4"
        style={{
          borderBottom: `1px solid ${colors.border}`,
          background: `${colors.bg}CC`,
          backdropFilter: "blur(8px)",
        }}
      >
        <a
          href="#top"
          className="font-mono"
          style={{ color: colors.textPrimary, fontSize: 14, letterSpacing: "0.04em" }}
        >
          codaks<span style={{ color: colors.accent }}>_</span>
        </a>
        <div className="hidden sm:flex items-center gap-8 font-mono" style={{ fontSize: 12.5 }}>
          {["projects", "building", "writing", "experience", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="nav-link"
              style={{ color: colors.textSecondary, letterSpacing: "0.06em" }}
            >
              {s.toUpperCase()}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono" style={{ fontSize: 12, color: colors.textTertiary }}>
          <span
            className="inline-block rounded-full"
            style={{ width: 6, height: 6, background: colors.deployed }}
          />
          {mm}:{ss}
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="px-6 sm:px-10 pt-20 pb-24 max-w-5xl mx-auto">
        <p
          className="font-mono mb-6"
          style={{ color: colors.textTertiary, fontSize: 13, letterSpacing: "0.08em" }}
        >
          PORTFOLIO / v1.0
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          Codaks
          <br />
          <span style={{ color: colors.textSecondary }}>builds systems</span>
          <br />
          that solve
          <br />
          <span style={{ color: colors.accent }}>real problems.</span>
        </h1>

        <p
          className="mt-8 max-w-xl"
          style={{ color: colors.textSecondary, fontSize: 17, lineHeight: 1.6 }}
        >
          Machine Learning Engineer based in Nigeria. I build data-driven
          systems that solve everyday problems — turning data and patterns
          into models and agents that act on their own accord.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="px-5 py-3 rounded-sm font-mono link-hover"
            style={{
              background: colors.accent,
              color: "#161200",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            VIEW PROJECTS →
          </a>
          <a
            href="mailto:peteroluwasegun2002@gmail.com"
            className="px-5 py-3 rounded-sm font-mono"
            style={{
              border: `1px solid ${colors.borderBright}`,
              color: colors.textPrimary,
              fontSize: 13,
              letterSpacing: "0.04em",
            }}
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Boot panel — signature element */}
        <div
          className="mt-16 rounded-sm px-6 py-5 max-w-md"
          style={{ background: colors.bgPanel, border: `1px solid ${colors.border}` }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block rounded-full" style={{ width: 7, height: 7, background: "#FF5F57" }} />
            <span className="inline-block rounded-full" style={{ width: 7, height: 7, background: "#FEBC2E" }} />
            <span className="inline-block rounded-full" style={{ width: 7, height: 7, background: "#28C840" }} />
            <span className="font-mono ml-2" style={{ fontSize: 11, color: colors.textTertiary }}>
              profile.sh
            </span>
          </div>
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <div key={line.k} className="font-mono fade-line mb-1.5" style={{ fontSize: 13 }}>
              <span style={{ color: colors.textTertiary }}>{line.k}</span>
              <span style={{ color: colors.textTertiary }}> → </span>
              <span style={{ color: line.accent ? colors.deployed : colors.textPrimary }}>
                {line.v}
              </span>
            </div>
          ))}
          {visibleLines >= bootLines.length && (
            <span className="font-mono cursor-blink" style={{ color: colors.accent }}>
              ▍
            </span>
          )}
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
        <SectionLabel index="01" title="Shipped projects" />
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="card-hover rounded-sm p-6 flex flex-col justify-between"
              style={{ background: colors.bgPanel, border: `1px solid ${colors.border}`, minHeight: 200 }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display" style={{ fontSize: 19, fontWeight: 600 }}>
                    {p.name}
                  </h3>
                  <StatusBadge status={p.status} />
                </div>
                <p
                  className="font-mono mb-3"
                  style={{ fontSize: 11.5, color: colors.accent, letterSpacing: "0.03em" }}
                >
                  {p.tag}
                </p>
                <p style={{ color: colors.textSecondary, fontSize: 14.5, lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
              {(p.link || p.repo) && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-5">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover flex items-center gap-1 font-mono"
                      style={{ color: colors.textSecondary, fontSize: 12.5 }}
                    >
                      {p.linkLabel} <ArrowUpRight size={13} />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover flex items-center gap-1 font-mono"
                      style={{ color: colors.textSecondary, fontSize: 12.5 }}
                    >
                      SOURCE <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Currently building */}
      <section id="building" className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
        <SectionLabel index="02" title="Currently building" />
        <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${colors.border}` }}>
          {buildLog.map((b, i) => (
            <div
              key={b.name}
              className="px-6 py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              style={{
                background: colors.bgPanel,
                borderBottom: i < buildLog.length - 1 ? `1px solid ${colors.border}` : "none",
              }}
            >
              <StatusBadge status={b.status} />
              <div>
                <h3 className="font-display" style={{ fontSize: 16, fontWeight: 600 }}>
                  {b.name}
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: 14, lineHeight: 1.55, marginTop: 4 }}>
                  {b.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
        <SectionLabel index="03" title="Writing" />
        <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${colors.border}` }}>
          {mediumPosts.map((post, i) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4"
              style={{
                background: colors.bgPanel,
                borderBottom: i < mediumPosts.length - 1 ? `1px solid ${colors.border}` : "none",
                color: colors.textPrimary,
              }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-mono"
                  style={{ fontSize: 11.5, color: colors.textTertiary, minWidth: 78 }}
                >
                  {post.date}
                </span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{post.title}</span>
              </div>
              <span
                className="font-mono flex items-center gap-1 shrink-0"
                style={{ fontSize: 12, color: colors.textSecondary }}
              >
                READ <ArrowUpRight size={13} />
              </span>
            </a>
          ))}
        </div>
        <a
          href="https://medium.com/@Codaks"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover inline-flex items-center gap-1 mt-4 font-mono"
          style={{ fontSize: 12.5, color: colors.textSecondary }}
        >
          ALL POSTS ON MEDIUM <ArrowUpRight size={13} />
        </a>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
        <SectionLabel index="04" title="Experience" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-sm p-6" style={{ background: colors.bgPanel, border: `1px solid ${colors.border}` }}>
            <p className="font-mono mb-2" style={{ fontSize: 11.5, color: colors.textTertiary, letterSpacing: "0.05em" }}>
              2025
            </p>
            <h3 className="font-display" style={{ fontSize: 18, fontWeight: 600 }}>
              ML Engineering Intern
            </h3>
            <p style={{ color: colors.textSecondary, fontSize: 14.5, marginTop: 4 }}>
              Nupat Technologies — Lagos
            </p>
          </div>
          <div className="rounded-sm p-6" style={{ background: colors.bgPanel, border: `1px solid ${colors.border}` }}>
            <p className="font-mono mb-2" style={{ fontSize: 11.5, color: colors.textTertiary, letterSpacing: "0.05em" }}>
              JULY 2026
            </p>
            <h3 className="font-display" style={{ fontSize: 18, fontWeight: 600 }}>
              B.Eng. Mechatronics Engineering
            </h3>
            <p style={{ color: colors.textSecondary, fontSize: 14.5, marginTop: 4 }}>
              Federal University Oye-Ekiti
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="px-6 sm:px-10 py-20 max-w-5xl mx-auto"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 12 }}
        >
          Let's build something.
        </h2>
        <p style={{ color: colors.textSecondary, fontSize: 15.5, maxWidth: 480, marginBottom: 32 }}>
          Open to ML engineering roles and collaborations. Reach out — I read
          everything myself.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:peteroluwasegun2002@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-mono"
            style={{ background: colors.accent, color: "#161200", fontSize: 13 }}
          >
            <Mail size={15} /> EMAIL
          </a>
          <a
            href="https://github.com/Codaksmade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-mono"
            style={{ border: `1px solid ${colors.borderBright}`, color: colors.textPrimary, fontSize: 13 }}
          >
            <Github size={15} /> GITHUB
          </a>
          <a
            href="https://linkedin.com/in/peter-johnson-55157b200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-sm font-mono"
            style={{ border: `1px solid ${colors.borderBright}`, color: colors.textPrimary, fontSize: 13 }}
          >
            <Linkedin size={15} /> LINKEDIN
          </a>
        </div>
        <p className="font-mono mt-16" style={{ fontSize: 11.5, color: colors.textTertiary }}>
          codaks © 2026 — built with intent, monitored for drift.
        </p>
      </footer>
    </div>
  );
}
