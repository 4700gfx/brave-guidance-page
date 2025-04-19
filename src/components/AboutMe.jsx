import React from 'react';
import sylvia from '../assets/images/sylvia-dowers.jpg';

const AboutMe = () => {
  return (
    <section className="w-11/12 mx-auto my-12">
      <div className="bg-primary-white rounded-2xl p-8 flex flex-col md:flex-row items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={sylvia} 
            alt="Sylvia Dowers" 
            className="rounded-2xl w-72 h-96 object-cover hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-accent-darker-green mb-4">About Me</h1>
          <div className='credentials mb-5'>
          <h2 className='text-md font-bold text-accent-darker-green'>College:</h2>
          <p>New York State</p>
          <h2 className='text-md font-bold text-accent-darker-green'>Years Of Experience:</h2>
          <p>5 Years of Experience</p>
          <h2 className='text-md font-bold text-accent-darker-green'>Insurance Accepted:</h2>
          <p>Blue Cross, Aetna, Optna and More</p>
          <h2 className='text-md font-bold text-accent-darker-green'>Modalities:</h2>
          <p>Occupational Therapy</p>
          </div>
          <p className="text-md text-gray-700 leading-relaxed">
          Working with individuals within the criminal justice system along with my own life experiences initially led me to the field of mental health. As I searched for answers to questions surrounding the impact of trauma, I realized the work had to start with me. Despite the stigmas and challenges, I decided to change the narrative and give back to my community. Obtaining the knowledge and understanding of the field included me doing my own personal work in therapy. I fell in love with the experience of processing and challenging beliefs driven by fear. I am truly passionate about growth and evolving as a person. I believe having compassion for yourself helps overcome the barriers that stand firmly in your path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
