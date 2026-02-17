"use client";

import { useState } from "react";
import styles from "./ContactMapForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactMapForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setMsg("Please fill in all required fields.");
      return;
    }

    const emailBody = `
      New Contact Enquiry

      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
      `;

    const apiBody = {
      site: "stonefort-uae",
      formType: "contact",
      to: "muhammad.u@stonefortsecurities.com",
      from: "no-reply@stonefortsecurities.com",
      subject: `Contact Enquiry: ${subject}`,
      body: emailBody,
      isHtml: true,
      replyTo: email,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiBody),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setStatus("error");
        setMsg(data?.error || "Failed to send. Please try again.");
        return;
      }

      setStatus("sent");
      setMsg("Thanks — your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <section className={styles.section} aria-label="Contact form and map">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT: Map */}
          <div className={styles.mapCard}>
            {/*  MAP HEADER CONTENT (added back) */}
            <div className={styles.mapHeader}>
              <div className={styles.kicker}>
                <span className={styles.kickerLine} aria-hidden="true" />
                OUR LOCATION
              </div>
              <h2 className={styles.title}>Visit Our UAE Office</h2>
              <p className={styles.sub}>
                Find us on the map and contact our support team anytime.
              </p>
            </div>

            <div className={styles.mapFrame} role="region" aria-label="Map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5282387802295!2d55.26150157483705!3d25.18540253217931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692f5bbd2b2d%3A0xd3a6184083590416!2sStonefort%20Securities%20L.L.C!5e0!3m2!1sen!2sae!4v1771310263464!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/*  MAP FOOTER META (added back) */}
            <div className={styles.mapFooter}>
              <div className={styles.metaItem}>
                <span className={styles.metaDot} aria-hidden="true" />
                Dubai, United Arab Emirates
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaDot} aria-hidden="true" />
                24/7 Multilingual Support
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className={styles.formGlowWrap}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send an Enquiry</h2>
              <p className={styles.formSub}>
                Fill in the form and our team will respond as soon as possible.
              </p>

              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.label}>Full Name</span>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Email</span>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className={styles.field}>
                  <span className={styles.label}>Subject</span>
                  <input
                    className={styles.input}
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Message</span>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    required
                  />
                </label>

                <div className={styles.actions}>
                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={status === "sending"}
                    aria-busy={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Submit Message"}
                  </button>

                  <div className={styles.note}>
                    <span className={styles.noteDot} aria-hidden="true" />
                    We’ll respond promptly via email.
                  </div>
                </div>

                {msg ? (
                  <div
                    className={status === "sent" ? styles.success : styles.error}
                    role="status"
                  >
                    {msg}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}