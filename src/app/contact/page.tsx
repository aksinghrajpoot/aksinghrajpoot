import type { Metadata } from 'next';
import React, { JSX } from 'react';

// The Metadata export from Next.js is already type-safe, but we can explicitly
// annotate it for clarity. This handles the page title and other meta tags.
export const metadata: Metadata = {
  title: "Contact",
};


const Contact = (): JSX.Element => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="text-primary">Let&apos;s Connect</h1>
          <hr className="border-t-2 border-primary w-[70px] mt-3" />
          <p className="text-[#8b949e] mb-10 pageDescription">
            Whether you have an opportunity, a project, or just want to say hi — I&apos;d love to hear from you!
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-transparent border border-[#58a6ff] text-[#58a6ff] px-6 py-2 rounded-lg hover:bg-[#58a6ff] hover:text-[#0d1117] transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 space-y-2 text-[#8b949e]">
            <p><strong className="text-white">Email:</strong> <a href="mailto:mail@aksinghrajpoot.com" className="text-[#58a6ff] hover:underline">mail@aksinghrajpoot.com</a></p>
            <p><strong className="text-white">LinkedIn:</strong> <a href="https://linkedin.com/in/aksinghrajpoot" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">linkedin.com/in/aksinghrajpoot</a></p>
            <p><strong className="text-white">GitHub:</strong> <a href="https://github.com/aksinghrajpoot" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">github.com/aksinghrajpoot</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
