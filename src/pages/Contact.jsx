import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {EMAILJS_SERVICE_ID , EMAILJS_TEMPLATE_ID,EMAILJS_USER_ID} from './config.js'
function Contact() {
  // State to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form inputs are not empty
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Prepare the data to be sent to the EmailJS template
    const templateParams = {
      name: name,       // This will match {{name}} in your EmailJS template
      email: email,     // This will match {{email}} in your EmailJS template
      message: message, // This will match {{message}} in your EmailJS template
    };

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Your message has been sent!");
          // Clear form inputs after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter name here"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email here"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="msg" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="msg"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full text-white font-medium bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Social Media Links */}
          <div className="mt-8">
            <div className="flex justify-center gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/arunkumarayinabathina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.304-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.38 11.38 0 0 1 3-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.652.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.597-.015 2.887-.015 3.283 0 .315.21.687.825.573C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arun-kumar-ab68ba231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.452 20.452h-3.555v-5.15c0-1.228-.025-2.812-1.714-2.812-1.716 0-1.978 1.342-1.978 2.725v5.237H9.648V9h3.417v1.561h.049c.476-.901 1.637-1.851 3.367-1.851 3.602 0 4.268 2.37 4.268 5.457v6.285zM5.337 7.433a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.99 20.452H3.683V9h3.306v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.718v20.568C0 23.23.792 24 1.771 24h20.453c.98 0 1.772-.77 1.772-1.714V1.718C23.997.77 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
