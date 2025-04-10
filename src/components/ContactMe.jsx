import React from 'react'

const ContactMe = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="w-5/8 mx-auto bg-main-light-green rounded-2xl shadow-lg flex flex-col justify-center items-center mb-10 text-center p-6 sm:p-10">
        <header>
          <h2 className="text-4xl font-bold text-main-dark-green p-2">Contact Me</h2>
          <p className="text-main-dark-green mt-4 max-w-md">
            Interested in working together? Let's connect!
            Fill out the form below to get started. Whether you have a question, a project idea, or just want to say hello, I’d love to hear from you.
            I’ll do my best to respond promptly and look forward to collaborating with you!
          </p>
        </header>

        <form className="w-full mt-6 px-4 sm:px-0">
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-sm font-medium text-main-dark-green mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm font-medium text-main-dark-green mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
            />
          </div>

          <div className="mb-4 text-left">
            <label htmlFor="message" className="block text-sm font-medium text-main-dark-green mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
            ></textarea>
          </div>

          <button
            type="submit"
            aria-label="Send Message"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
