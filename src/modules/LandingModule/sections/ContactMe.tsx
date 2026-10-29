"use client";
import { Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/text-link";
import { FormField, formControlClasses } from "@/components/ui/form-field";
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
    <Section
      id="contact"
      className="grid grid-cols-1 gap-10 pb-(--space-section) min-[768px]:grid-cols-2 min-[768px]:gap-[6%] min-[1024px]:gap-[10%]"
    >
      <div>
        <SectionHeading
          className="max-[768px]:mb-5"
          titleClassName="text-[clamp(3.3rem,12vw,5rem)] leading-[1.06] min-[768px]:text-[clamp(3.5rem,6vw,6rem)]"
          number="04"
          title="Let's build something together."
          description="Get in touch"
        />
        <TextLink
          className="text-[12px] [overflow-wrap:anywhere]"
          href="mailto:anandagautama3112@gmail.com"
        >
          anandagautama3112@gmail.com ↗
        </TextLink>
      </div>
      <Reveal>
        <form onSubmit={submit} aria-busy={loading} className="grid gap-6">
          <div className="grid grid-cols-1 gap-6 min-[768px]:grid-cols-2 min-[768px]:gap-5">
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
              <FormField key={f.name} id={f.name} label={f.label}>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.auto}
                  placeholder={f.placeholder}
                  required
                  disabled={loading}
                  className={formControlClasses}
                />
              </FormField>
            ))}
          </div>
          <FormField id="subject" label="Subject">
            <input
              id="subject"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              required
              disabled={loading}
              className={formControlClasses}
            />
          </FormField>
          <FormField id="message" label="Message">
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={5}
              placeholder="Your Message"
              required
              disabled={loading}
              className={formControlClasses + " resize-y"}
            />
          </FormField>
          <Button type="submit" disabled={loading} className="justify-between">
            {loading ? "Sending…" : "Send Message"}
            <span aria-hidden>↗</span>
          </Button>
          <p
            className={"min-h-6 text-[13px]" + (status ? " text-accent" : "")}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {status?.message}
          </p>
        </form>
      </Reveal>
    </Section>
  );
}
