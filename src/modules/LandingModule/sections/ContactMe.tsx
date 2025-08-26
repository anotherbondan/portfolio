import Button from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

export default function ContactMe() {
  return (
    <section id="contact" className="min-h-screen flex flex-col py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-6xl font-semibold font-playfair-display text-center">
            Contact Me
          </h2>
          <p className="text-xs font-inter text-gray-500 text-center">
            Know me better!
          </p>
        </div>

        <div className="w-full flex flex-col gap-6 p-6 rounded-xl"> 
          <form className="space-y-6" method="POST" action="/api/send-email">
            <div className="flex gap-4">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold font-inter">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-card-hover border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold font-inter">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  required
                  className="w-full p-3 rounded-lg bg-card-hover border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="message" className="font-semibold font-inter">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 rounded-lg bg-card-hover border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="py-2 rounded-xl bg-purple-500 w-full"
            >
              <div className="flex gap-2 items-center justify-center">
                <IoPaperPlane />
                <h1 className="font-inter">Send Message</h1>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
