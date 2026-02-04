"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

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
    <section id="contact" className="flex min-h-screen flex-col py-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <h2 className="font-playfair-display text-center text-6xl font-semibold">
            Contact Me
          </h2>
          <p className="font-inter text-center text-xs text-gray-500">
            Know me better!
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex w-full flex-col gap-6 rounded-xl p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="name" className="font-inter font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isLoading}
                    className="bg-card w-full rounded-xl p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="email" className="font-inter font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@email.com"
                    required
                    disabled={isLoading}
                    className="bg-card w-full rounded-xl p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-1">
                <label htmlFor="message" className="font-inter font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  disabled={isLoading}
                  className="bg-card w-full rounded-xl p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:outline-none disabled:opacity-50"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-purple-500 py-3 hover:scale-100 disabled:opacity-70 disabled:hover:scale-100"
              >
                <div className="flex items-center justify-center gap-2">
                  <IoPaperPlane />
                  <h1 className="font-inter text-xs">
                    {isLoading ? "Sending..." : "Send Message"}
                  </h1>
                </div>
              </Button>
              {status.message && (
                <div
                  className={`text-center text-sm font-semibold ${
                    status.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
