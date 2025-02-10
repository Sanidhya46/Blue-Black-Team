import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi"; // Importing icons

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-black to-blue-900 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Title Section */}            
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-300">We'd love to hear from you!</p>
        </div>

        {/* Contact Form */}      
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-50 text-black"
              />
            </div>

            {/* Email Input with Icon */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FiMail className="text-gray-400 mx-3" size={20} />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-50 text-black"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-50 text-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
