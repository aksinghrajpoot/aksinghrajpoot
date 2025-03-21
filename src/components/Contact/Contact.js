import Image from "next/image";
import style from "./Contact.module.css";


function Contact(){
return(
    <>
    <section className="py-12" id="contact">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6 numberedHeading">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          Whether you have a project idea, a job opportunity, or just want to say hi,  
          feel free to reach out. I&apos;d love to connect!
        </p>

        {/* Contact Form */}
        <form className="max-w-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 mt-2 bg-primary text-black font-semibold rounded hover:bg-opacity-80 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-gray-400">Or connect with me on:</p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/aksinghrajpoot" target="_blank" className="text-primary hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aksinghrajpoot" target="_blank" className="text-primary hover:underline">
              LinkedIn
            </a>
            <a href="mailto:mail@aksinghrajpoot.com" className="text-primary hover:underline">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>


    
    </>
)

}
export default Contact;