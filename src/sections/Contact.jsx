import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-400">
              I'm open to internships, job opportunities, and freelance projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📧 Email: dharmendrabehera680@gmail.com</p>
              <p>📱 Phone: +91 6372505485</p>
              <p>📍 Location: India</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-6"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/20 focus:outline-none focus:border-pink-500"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/20 focus:outline-none focus:border-pink-500"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-black/50 border border-white/20 focus:outline-none focus:border-pink-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;