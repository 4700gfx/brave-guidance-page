import React, { useState } from 'react'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAnswer = (index) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  const questionsTabs = [
    {
      question: 'What should someone know about working with you?',
      answer:
        'My approach is tailored to meet the unique needs of each person I work with and based on warmth, understanding, and empathy. There is no one-size-fits-all approach when it comes to being human and understanding the changes that occur in our day-to-day lives; we are complex with several layers of experience. Sessions will be a collaborative experience that will focus on the exploration of the mind and body using evidence-based approaches, including CBT, EMDR, and mindfulness, to access, unpack, and stabilize. My goal is to provide you with a safe space where you can be heard and feel understood without fear or judgment in order to accomplish a satisfying and desirable life.',
    },
    {
      question: 'What are you most excited about within the evolving mental health landscape?',
      answer:
        'I am most excited about the changes and views of mental health within communities of color and the accessibility of therapy. Mental health has evolved tremendously due to circumstances beyond our control (including Covid-19). Telehealth has provided many with the access to a professional without the hustle and bustle of commuting while simultaneously normalizing the process of seeking therapy through an online portal.',
    },
    {
      question: 'What was your path to becoming a therapist?',
      answer:
        'Working with individuals within the criminal justice system along with my own life experiences initially led me to the field of mental health. As I searched for answers to questions surrounding the impact of trauma, I realized the work had to start with me. Despite the stigmas and challenges, I decided to change the narrative and give back to my community. Obtaining the knowledge and understanding of the field included me doing my own personal work in therapy. I fell in love with the experience of processing and challenging beliefs driven by fear. I am truly passionate about growth and evolving as a person. I believe having compassion for yourself helps overcome the barriers that stand firmly in your path.',
    },
  ]

  return (
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">FAQs</h2>
        <p className="text-white text-center text-base sm:text-lg max-w-3xl mx-auto">
          Still have questions? <br />
          No worries — you're probably not the only one. We've pulled together some of the most commonly asked questions to help you out. Take a look through the FAQs below — chances are the answer you're looking for is right there!
        </p>

        {questionsTabs.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleAnswer(index)}
            className={`bg-white rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                {item.question}
              </h3>
              <span className={`text-2xl transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
