"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: null });

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-5 py-32"
    >
      <div className="flex w-full max-w-4xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 md:gap-4"
        >
          <h2 className="font-playfair-display text-center text-5xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')] md:text-6xl">
            Contact Me
          </h2>
          <p className="font-inter text-center text-xs tracking-widest text-gray-400 uppercase md:text-sm">
            Let&apos;s build something together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass flex w-full flex-col gap-6 rounded-3xl p-5 shadow-[0_0_20px_rgba(147,51,234,0.2)] ring-1 ring-white/10 md:p-8"
        >
          <form className="space-y-5 md:space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 md:flex-row md:gap-6">
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-sm font-semibold text-neutral-300 md:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-sm text-white transition-all focus:border-purple-400 focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50 md:p-4 md:text-base"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-inter text-sm font-semibold text-neutral-300 md:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  required
                  disabled={isLoading}
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-sm text-white transition-all focus:border-purple-400 focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50 md:p-4 md:text-base"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="subject"
                className="font-inter text-sm font-semibold text-neutral-300 md:text-base"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                disabled={isLoading}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-sm text-white transition-all focus:border-purple-400 focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50 md:p-4 md:text-base"
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="message"
                className="font-inter text-sm font-semibold text-neutral-300 md:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                disabled={isLoading}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-sm text-white transition-all focus:border-purple-400 focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50 md:p-4 md:text-base"
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl border-none bg-purple-600 py-3.5 transition-colors hover:bg-purple-500 disabled:opacity-70 md:py-4"
            >
              <div className="flex items-center justify-center gap-3">
                <IoPaperPlane size={20} />
                <h1 className="font-inter md:text-md text-sm font-semibold">
                  {isLoading ? "Sending..." : "Send Message"}
                </h1>
              </div>
            </Button>
            {status.message && (
              <div
                className={`mt-2 text-center text-sm font-semibold ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
