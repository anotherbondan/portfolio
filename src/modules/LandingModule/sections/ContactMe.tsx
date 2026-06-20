"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
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
    <section id="contact" className="flex min-h-screen flex-col py-20 justify-center items-center">
      <div className="flex w-full max-w-4xl flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-playfair-display text-center text-6xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')]">
            Contact Me
          </h2>
          <p className="font-inter text-center text-sm text-gray-400 tracking-widest uppercase">
            Let's build something together
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col gap-6 rounded-2xl p-8 glass shadow-[0_0_20px_rgba(147,51,234,0.2)] ring-1 ring-white/10"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="name" className="font-inter font-semibold text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className="bg-black/40 border border-white/10 text-white w-full rounded-xl p-4 transition-all focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:border-purple-400 focus:outline-none disabled:opacity-50"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="email" className="font-inter font-semibold text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  required
                  disabled={isLoading}
                  className="bg-black/40 border border-white/10 text-white w-full rounded-xl p-4 transition-all focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:border-purple-400 focus:outline-none disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="message" className="font-inter font-semibold text-neutral-300">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                disabled={isLoading}
                className="bg-black/40 border border-white/10 text-white w-full rounded-xl p-4 transition-all focus:shadow-[0_0_15px_theme('colors.purple.500')] focus:border-purple-400 focus:outline-none disabled:opacity-50"
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-purple-600 border-none py-4 hover:bg-purple-500 disabled:opacity-70 transition-colors"
            >
              <div className="flex items-center justify-center gap-3">
                <IoPaperPlane size={20} />
                <h1 className="font-inter text-md font-semibold">
                  {isLoading ? "Sending..." : "Send Message"}
                </h1>
              </div>
            </Button>
            {status.message && (
              <div
                className={`text-center text-sm font-semibold mt-4 ${
                  status.type === "success"
                    ? "text-cyan-400"
                    : "text-red-400"
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
