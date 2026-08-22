"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    __openCareerModal?: (department?: string) => void;
  }
}

type Status = "idle" | "sending" | "sent" | "error";

const DEPARTMENTS = [
  "Image Editor",
  "Video Editor",
  "VFX Artist",
  "Quality Controller",
  "Social Media Manager",
  "Customer Support",
  "Global Marketing",
  "Business Development",
  "Finance & HR",
  "IT & Development",
];

export default function CareerModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [departments, setDepartments] = useState<string[]>([DEPARTMENTS[0]]);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.__openCareerModal = (dept) => {
      setStatus("idle");
      setErrorMsg("");
      if (dept && DEPARTMENTS.includes(dept)) setDepartments([dept]);
      setOpen(true);
    };
    return () => {
      delete window.__openCareerModal;
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (departments.length === 0) {
      setStatus("error");
      setErrorMsg("Please select at least one department.");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Apply to Skill Graphics"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10,10,12,.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 480,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: 20,
          padding: "clamp(28px,4vw,44px)",
          boxShadow: "0 40px 100px rgba(0,0,0,.4)",
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid #e2e2df",
            background: "#fff",
            color: "#141414",
            fontSize: 20,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &times;
        </button>

        {status === "sent" ? (
          <div style={{ padding: "20px 0" }}>
            <p
              style={{
                font: "600 12px 'Space Grotesk'",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#7B2C8E",
                margin: "0 0 14px",
              }}
            >
              Application sent
            </p>
            <h2
              style={{
                fontFamily: "'Archivo'",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,3.4vw,2.1rem)",
                lineHeight: 1.1,
                margin: "0 0 14px",
                color: "#161616",
              }}
            >
              Thanks — our team will review your application.
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 26,
                background: "#141414",
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "13px 26px",
                font: "600 14px 'Space Grotesk'",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p
              style={{
                font: "600 12px 'Space Grotesk'",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#7B2C8E",
                margin: "0 0 12px",
              }}
            >
              Join us
            </p>
            <h2
              style={{
                fontFamily: "'Archivo'",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,3.4vw,2.1rem)",
                lineHeight: 1.05,
                margin: "0 0 8px",
                color: "#161616",
                letterSpacing: "-.01em",
              }}
            >
              Explore open roles
            </h2>
            <p style={{ font: "400 14px/1.6 'Space Grotesk'", color: "#5b5b58", margin: "0 0 24px" }}>
              Tell us about yourself and attach your CV — we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={onSubmit} style={{ display: "grid", gap: 14 }} encType="multipart/form-data">
              {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
              />

              <label style={fieldLabelStyle}>
                Name
                <input ref={firstFieldRef} name="name" type="text" required style={inputStyle} />
              </label>
              <label style={fieldLabelStyle}>
                Email
                <input name="email" type="email" required style={inputStyle} />
              </label>
              <div style={fieldLabelStyle}>
                Department <span style={{ opacity: 0.5 }}>(select all that apply)</span>
                <div
                  role="group"
                  aria-label="Department"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    textTransform: "none",
                    letterSpacing: "normal",
                  }}
                >
                  {DEPARTMENTS.map((d) => {
                    const checked = departments.includes(d);
                    return (
                      <button
                        key={d}
                        type="button"
                        role="checkbox"
                        aria-checked={checked}
                        onClick={() =>
                          setDepartments((prev) =>
                            prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
                          )
                        }
                        style={{
                          textAlign: "left",
                          font: "500 13px 'Space Grotesk'",
                          color: checked ? "#fff" : "#141414",
                          background: checked ? "#7B2C8E" : "#fff",
                          border: `1.5px solid ${checked ? "#7B2C8E" : "#e2e2df"}`,
                          borderRadius: 10,
                          padding: "10px 12px",
                          cursor: "pointer",
                          transition: "background .2s ease,border-color .2s ease,color .2s ease",
                        }}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
                {departments.map((d) => (
                  <input key={d} type="hidden" name="department" value={d} />
                ))}
              </div>
              <label style={fieldLabelStyle}>
                Message <span style={{ opacity: 0.5 }}>(optional)</span>
                <textarea name="message" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </label>
              <label style={fieldLabelStyle}>
                CV / Resume <span style={{ opacity: 0.5 }}>(PDF or Word, max 10MB)</span>
                <input
                  name="cv"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  style={{ ...inputStyle, padding: "10px 14px" }}
                />
              </label>

              {status === "error" && (
                <p style={{ color: "#c0392b", font: "500 13px 'Space Grotesk'", margin: 0 }}>
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  marginTop: 6,
                  background: status === "sending" ? "#a3a3a3" : "#7B2C8E",
                  color: "#fff",
                  border: "none",
                  borderRadius: 100,
                  padding: "14px 26px",
                  font: "600 15px 'Space Grotesk'",
                  cursor: status === "sending" ? "default" : "pointer",
                  transition: "background .2s ease",
                }}
              >
                {status === "sending" ? "Sending…" : "Submit application"}
              </button>
              <p style={{ font: "400 12px/1.5 'Space Grotesk'", color: "#9a9a95", margin: 0 }}>
                Prefer email?{" "}
                <a href="mailto:HR@skill.ventures" style={{ color: "#7B2C8E" }}>
                  HR@skill.ventures
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const fieldLabelStyle: React.CSSProperties = {
  display: "grid",
  gap: 6,
  font: "600 12px 'Space Grotesk'",
  letterSpacing: ".04em",
  textTransform: "uppercase",
  color: "#6b6b68",
};

const inputStyle: React.CSSProperties = {
  font: "400 15px 'Space Grotesk'",
  color: "#141414",
  textTransform: "none",
  letterSpacing: "normal",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1.5px solid #e2e2df",
  outline: "none",
  fontFamily: "'Space Grotesk', sans-serif",
};
