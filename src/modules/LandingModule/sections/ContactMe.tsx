"use client";
import { useState, FormEvent } from "react";
import Button from "@/components/ui/button";
import { SectionHeading, Reveal } from "@/components/motion";
export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    const values = new FormData(form);
    const data = {
      name: values.get("name"),
      email: values.get("email"),
      subject: values.get("subject"),
      message: values.get("message"),
    };
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          result.message ||
            (response.status === 429
              ? "Too many requests. Please try again later."
              : "Failed to send message. Please try again."),
        );
      setStatus({ type: "success", message: "Message sent successfully!" });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof TypeError
            ? "Could not connect. Please try again."
            : error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id="contact" className="section contact-grid container">
      <div>
        <SectionHeading
          number="04"
          title="Let's build something together."
          description="Get in touch"
        />
        <a
          className="text-link contact-email"
          href="mailto:anandagautama3112@gmail.com"
        >
          anandagautama3112@gmail.com ↗
        </a>
      </div>
      <Reveal>
        <form onSubmit={submit} aria-busy={loading} className="contact-form">
          <div className="form-row">
            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                auto: "name",
                placeholder: "Your Name",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                auto: "email",
                placeholder: "youremail@email.com",
              },
            ].map((f) => (
              <div className="field" key={f.name}>
                <label htmlFor={f.name}>{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.auto}
                  placeholder={f.placeholder}
                  required
                  disabled={loading}
                />
              </div>
            ))}
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              required
              disabled={loading}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={5}
              placeholder="Your Message"
              required
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
            <span aria-hidden>↗</span>
          </Button>
          <p
            className={"form-status " + (status?.type ?? "")}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {status?.message}
          </p>
        </form>
      </Reveal>
    </section>
  );
}
