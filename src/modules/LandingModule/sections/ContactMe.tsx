import Button from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

export default function ContactMe() {
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

        <div className="flex w-full flex-col gap-6 rounded-xl p-6">
          <form className="space-y-6" method="POST" action="/api/send-email">
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
                  className="bg-card-hover w-full rounded-lg p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:ring-1 focus:ring-purple-200 focus:outline-none"
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
                  className="bg-card-hover w-full rounded-lg p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:ring-1 focus:ring-purple-200 focus:outline-none"
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
                className="bg-card-hover w-full rounded-lg p-3 focus:shadow-[0_0_10px_theme('colors.purple.500')] focus:ring-1 focus:ring-purple-200 focus:outline-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-purple-500 py-3 hover:scale-100"
            >
              <div className="flex items-center justify-center gap-2">
                <IoPaperPlane />
                <h1 className="font-inter text-xs">Send Message</h1>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
