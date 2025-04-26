import React from 'react';
import sylvia from '../assets/images/sylvia-dowers.jpg';

const AboutMe = () => {
  return (
    <section className="w-11/12 mx-auto my-8 md:my-12" id='AboutMe'>
      <div className="bg-primary-white rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out gap-6">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={sylvia} 
            alt="Sylvia Dowers" 
            className="rounded-2xl w-full max-w-xs md:max-w-md object-cover hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-darker-green">About Me</h1>
          
          <div className='credentials space-y-3'>
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>College:</h2>
              <p className='text-base md:text-lg'>New York State</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Years Of Experience:</h2>
              <p className='text-base md:text-lg'>Over 10+ Years of Experience</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Therapeutic Approaches:</h2>
              <p className='text-base md:text-lg'>Client-Centered Therapy, CBT, EMDR, Gottman Method, & Trauma Informed</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Treatment Specialization Includes:</h2>
              <p className='text-base md:text-lg'>Individual, Couples, Life Transitions, Trauma, PTSD, Coaching, Anxiety, Depression, General Relationship challenges, General Mental Health</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Modalities:</h2>
              <p className='text-base md:text-lg'>Occupational Therapy, CBT, Psychodynamic Therapy</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Insurance Accepted:</h2>
              <p className='text-base md:text-lg'>Empire BCBS, Aetna, Cigna, Optum (UnitedHealthCare, Oscar, Oxford, UMR)</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Locations:</h2>
              <p className='text-base md:text-lg'>FL, NY - Virtual</p>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Working with individuals within the criminal justice system along with my own life experiences initially led me to the field of mental health. As I searched for answers to questions surrounding the impact of trauma, I realized the work had to start with me. Despite the stigmas and challenges, I decided to change the narrative and give back to my community. Obtaining the knowledge and understanding of the field included me doing my own personal work in therapy. I fell in love with the experience of processing and challenging beliefs driven by fear. I am truly passionate about growth and evolving as a person. I believe having compassion for yourself helps overcome the barriers that stand firmly in your path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
