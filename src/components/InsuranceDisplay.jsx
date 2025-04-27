import React, { useEffect, useState } from 'react'
import insurance1 from '../assets/images/insurance1.png'
import insurance2 from '../assets/images/insurance2.png'
import insurance3 from '../assets/images/insurance3.png'
import insurance4 from '../assets/images/insurance4.png'
import insurance5 from '../assets/images/insurance5.png'
import insurance6 from '../assets/images/insurance6.png'

const InsuranceDisplay = () => {
  const messages = [
    {
      header: "Out of Pocket/Sliding Scale",
      textImage: "$125 - $250 | Sliding scale available upon request"
    },
    {
      header: "Insurance Accepted",
      textImage: [insurance1, insurance2, insurance3, insurance4, insurance5, insurance6]
    },
    {
      header: "Have More Questions?",
      textImage:
        "If you have any additional questions pertaining to your current insurance plan and your co-pay cost, kindly fill out the Contact Me Form and I will be able to assist with any of your questions."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setIsFading(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentMessage = messages[currentIndex]

  return (
    <section className='w-full px-4 py-8' id='Insurance'>
      <div className='bg-white w-full max-w-5xl mx-auto rounded-2xl shadow-md flex flex-col justify-center items-center px-6 py-10 md:px-10 transition-all duration-500 ease-in-out'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-darker-green text-center mb-8'>
          Insurance & Out Of Pocket Cost
        </h1>

        <div
          className={`text-center w-full transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
            {currentMessage.header}
          </h2>

          {Array.isArray(currentMessage.textImage) ? (
            <div className='flex justify-center items-center gap-4 sm:gap-6 flex-wrap'>
              {currentMessage.textImage.map((img, index) => (
                <div
                  key={index}
                  className="w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 flex justify-center items-center bg-white p-2"
                >
                  <img
                    src={img}
                    alt={`insurance-${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='text-base sm:text-lg md:text-xl text-gray-700 px-2 sm:px-6'>
              {currentMessage.textImage}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default InsuranceDisplay
