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
          <h1 className="text-3xl md:text-5xl font-bold text-accent-darker-green">About BGCS</h1>
          
          <div className='credentials space-y-3'>
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Years Of Experience:</h2>
              <p className='text-base md:text-lg'>Over 10+ Years of Experience</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Therapeutic Approaches:</h2>
              <p className='text-base md:text-lg'>Client-Centered Therapy, Cognitive Behavior Therapy, EMDR, Gottman Method, Solution Focus Therapy & Trauma Informed Therapy <br></br>
              </p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Treatment Specialization Includes:</h2>
              <p className='text-base md:text-lg'>Individual, Couples, Life Transitions, Coaching, Anxiety, Depression, General Relationship Challenges, General Mental Health, Marriage and Partnerships, Trauma and Post-traumatic Stress Disorder (PTSD)</p>
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Insurance Accepted:</h2>
              <p className='text-base md:text-lg'>Empire BCBS, Aetna, Cigna, Optum (UnitedHealthCare, Oscar, Oxford, UMR)</p>
            </div>

            <div className='mb-2'>
              <h2 className='text-lg md:text-xl font-semibold text-accent-darker-green'>Locations:</h2>
              <p className='text-base md:text-lg'>FL, NY - Virtual</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-accent-darker-green">Meet Sylvia</h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Sylvia N Dowers, LMHC, QS owner and operator of Brave Guidance Counseling Service. Sylvia obtained her Bachelors of Arts Degree in Criminal Justice minor in Forensic Psychology from Long Island University- CW Post and her Masters of Science in Mental Health Counseling from Long Island University- Brooklyn. She furthered her education in Trauma Studies from the  Institute for Contemporary Psychotherapy and is currently pursuing additional training and certification in Clinical Sexology from the Modern Sex Therapy Institutes. 
          <br></br>
          <br></br>
          She began her journey as a psychotherapist working with individuals within underserved communities and the NYC criminal justice system. She noticed the difficulty and disconnect in services for those who struggle with their mental well-being. As she searched for answers to questions surrounding the impact of trauma quickly realizing the work had to start with her. Sylvia fell in love with the experience of processing and challenging beliefs driven by fear. She is truly passionate about growth and evolving as a person which includes learning to cultivate compassion for yourself to  overcome the barriers that stand firmly in your path

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
