import React from 'react'
import { motion } from 'framer-motion'

const Quote1 = () => {
  return (
    <section className="py-12 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center"
      >
        <hr className="border-gray-400 mb-6" />

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
          "Be kind to yourself — it's the first step to gently moving through the obstacles in your path."
        </h1>

        <hr className="border-gray-400 mt-6" />
      </motion.div>
    </section>
  )
}

export default Quote1
