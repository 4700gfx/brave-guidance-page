import React, { useState } from 'react'
import contactPic from '../assets/images/contact-me-pic.jpg'

const ContactMe = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/myzwzvnj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('SUCCESS')
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting the form.')
      console.log(error)
    }
  }

  return (
    <section className="w-full px-4 py-10" id="ContactMe">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-5/6 md:w-[62.5%] mx-auto rounded-2xl shadow-lg flex flex-col justify-center items-center mb-10 text-center p-4 sm:p-6 md:p-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactPic})` }}
      >
        <div className="w-full h-full bg-main-light-green/80 rounded-2xl p-4 sm:p-8">
          <header>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-main-dark-green p-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact Me
            </motion.h2>
            <motion.p
              className="text-main-dark-green mt-4 max-w-md mx-auto text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Interested in working together? Let's connect! Fill out the form below to get started.
              Whether you have a question, a project idea, or just want to say hello, I’d love to hear from you.
            </motion.p>
          </header>

          {status === 'SUCCESS' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 bg-green-600 text-white rounded-lg p-4 text-center shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been sent successfully. I’ll get back to you soon!</p>
            </motion.div>
          ) : (
            <form
              className="w-full mt-6 px-2 sm:px-0 max-w-xl mx-auto"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New message from portfolio site!" />

              <div className="mb-4 text-left">
                <label htmlFor="name" className="block text-sm font-medium text-main-dark-green mb-1">
                  Your Name
                </label>
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
                <label htmlFor="email" className="block text-sm font-medium text-main-dark-green mb-1">
                  Your Email
                </label>
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
                <label htmlFor="message" className="block text-sm font-medium text-main-dark-green mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                aria-label="Send Message"
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out w-full sm:w-auto"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default ContactMe
