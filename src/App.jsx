import React, { useState } from "react";

const PURPLE = "#6B21A8";
const CREAM = "#F7F4EF";
const INK = "#1A1A1A";
const LINE = "#D8D0C4";

// Set this to wherever the ShipLock skill install / onboarding lives.
const SKILL_URL = "https://claude.ai";

const INTAKE = [
  "What is the name of the project you are currently building?",
  "What is the one-sentence purpose of this project?",
  "What does \"done\" look like for this ship cycle?",
  "What are the 3 to 5 must-have components to reach done?",
  "What is your hard deadline to complete this ship cycle?",
  "On a scale of 1 to 10, how ready are you to finish ONLY this?",
];

function Button({ children, href, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "14px 28px",
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: "0.02em",
        textDecoration: "none",
        borderRadius: 0,
        border: `1px solid ${PURPLE}`,
        background: primary ? PURPLE : "transparent",
        color: primary ? CREAM : PURPLE,
      }}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "system-ui, -apple-system, sans-serif", color: INK }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 20px 72px" }}>

        {/* Hero */}
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: PURPLE, fontWeight: 700, marginBottom: 14 }}>
          Finish · Ship · pAId
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 52, fontWeight: 700, margin: 0, lineHeight: 1.02, letterSpacing: "-0.01em" }}>
          ShipLock
        </h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 22, lineHeight: 1.35, color: "#333", marginTop: 18, marginBottom: 28, maxWidth: 560 }}>
          One ship at a time. The accountability skill that refuses to let you start a new thing until you finish the current one.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href={SKILL_URL} primary>Get ShipLock</Button>
          <Button href="#how">See how it works</Button>
        </div>

        {/* The problem */}
        <div style={{ borderTop: `1px solid ${LINE}`, marginTop: 56, paddingTop: 40 }}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#333", margin: 0 }}>
            You are a prolific builder. That is the problem. ShipLock exists to protect you
            from your own next idea. Its one job: hold the line on your active ship until
            it is actually done. No loopholes. No "just a quick thing."
          </p>
        </div>

        {/* How it works */}
        <div id="how" style={{ marginTop: 52 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: PURPLE, fontWeight: 700, marginBottom: 18 }}>
            How it works
          </div>

          {[
            { n: "01", t: "Lock your ship", d: "A six-question intake pins down one project, what done looks like, the scope, and a hard deadline. You confirm. It locks." },
            { n: "02", t: "Hold the line", d: "Every new idea that comes in gets named, honored in one sentence, and redirected. ShipLock will not help you scope, name, or build the new thing." },
            { n: "03", t: "Park, don't lose", d: "Shiny ideas go to the parking lot with a one-line summary. Nothing is forgotten. Nothing derails the ship." },
            { n: "04", t: "Ship and celebrate", d: "Declare the cycle complete, get your moment, then the parking lot resurfaces so you choose what's next." },
          ].map((s) => (
            <div key={s.n} style={{ display: "flex", gap: 20, padding: "20px 0", borderBottom: `1px solid ${LINE}` }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: PURPLE, minWidth: 44 }}>{s.n}</div>
              <div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, marginBottom: 5 }}>{s.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "#555" }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Intake preview */}
        <div style={{ marginTop: 52 }}>
          <button
            onClick={() => setOpen((o) => !o)}
            style={{
              width: "100%", textAlign: "left", background: open ? PURPLE : "#FFFFFF",
              color: open ? CREAM : INK, border: `1px solid ${open ? PURPLE : LINE}`,
              borderRadius: 0, padding: "18px 22px", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}
          >
            <span style={{ fontFamily: "Georgia, serif", fontSize: 19, fontWeight: 700 }}>
              The six questions that lock your ship
            </span>
            <span style={{ fontSize: 22, fontWeight: 700 }}>{open ? "–" : "+"}</span>
          </button>
          {open && (
            <ol style={{ margin: 0, padding: "24px 22px 24px 44px", background: "#FFFDF9", border: `1px solid ${LINE}`, borderTop: "none" }}>
              {INTAKE.map((q, i) => (
                <li key={i} style={{ fontSize: 16, lineHeight: 1.5, color: "#333", marginBottom: i === INTAKE.length - 1 ? 0 : 14, paddingLeft: 6 }}>
                  {q}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Voice taste */}
        <div style={{ marginTop: 52, background: "#FFFFFF", border: `1px solid ${LINE}`, padding: "28px 26px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: PURPLE, fontWeight: 700, marginBottom: 14 }}>
            What it sounds like
          </div>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 20, lineHeight: 1.45, color: INK, margin: 0 }}>
            "Sis. SIS. 👀 We are NOT doing this right now. Your ship is sitting right there
            half-dressed waiting on you. Park the idea, we'll get to it. But not today. Not. Today."
          </p>
          <p style={{ fontSize: 14, color: "#888", marginTop: 16, marginBottom: 0 }}>
            ShipLock is honest, not mean. The best friend who grabs your arm before you do
            the thing you'll regret.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, margin: "0 0 10px" }}>
            Lock one ship. Finish it.
          </h2>
          <p style={{ fontSize: 16, color: "#666", margin: "0 0 24px" }}>
            Included with your Iter8 seat.
          </p>
          <Button href={SKILL_URL} primary>Get ShipLock</Button>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "#A99", marginTop: 48 }}>
          Virtually NayLah · Finish That Thing
        </p>
      </div>
    </div>
  );
}
