import React from 'react';
import sylvia from '../assets/images/sylvia-dowers.jpg';
import logo from '../assets/images/brave-guidance-trans.png';

const AboutMe = () => {
  return (
    <section className="w-11/12 mx-auto my-8 md:my-12" id="AboutMe">

      {/* About BGCS Section */}
      <div className="bg-primary-white rounded-2xl w-full md:w-2/3 lg:w-1/2 p-4 md:p-8 flex flex-col mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-accent-darker-green text-center md:text-left">About BGCS</h1>
          <img
            src={logo}
            alt="Brave Guidance Counseling Service Logo"
            className="w-24 md:w-36 mt-4 md:mt-0"
          />
        </div>

        <div className="credentials space-y-4 mt-6">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-accent-darker-green">Years Of Experience:</h2>
            <p className="text-base md:text-lg">Over 10+ Years of Experience</p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-accent-darker-green">Therapeutic Approaches:</h2>
            <ul className="text-base md:text-md list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <li>Client-Centered Therapy</li>
              <li>Cognitive Behavior Therapy</li>
              <li>EMDR</li>
              <li>Gottman Method</li>
              <li>Solution Focus Therapy</li>
              <li>Trauma Informed Therapy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-accent-darker-green">Treatment Specialization Includes:</h2>
            <ul className="text-base md:text-md list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <li>Individual</li>
              <li>Couples</li>
              <li>Life Transitions</li>
              <li>Coaching</li>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>General Relationship Challenges</li>
              <li>General Mental Health</li>
              <li>Marriage and Partnerships</li>
              <li>Trauma and Post-traumatic Stress Disorder (PTSD)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-accent-darker-green">Insurance Accepted:</h2>
            <p className="text-base md:text-lg">Empire BCBS, Aetna, Cigna, Optum (UnitedHealthCare, Oscar, Oxford, UMR)</p>
          </div>

          <div className="mb-2">
            <h2 className="text-lg md:text-xl font-semibold text-accent-darker-green">Locations:</h2>
            <p className="text-base md:text-lg">FL, NY - Virtual</p>
          </div>
        </div>
      </div>

      {/* Meet Sylvia Section */}
      <div className="bg-primary-white rounded-2xl p-4 md:p-8 mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={sylvia}
              alt="Sylvia Dowers"
              className="rounded-2xl w-full max-w-xs md:max-w-md object-cover hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-accent-darker-green">Meet Sylvia</h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Sylvia N Dowers, LMHC, QS owner and operator of Brave Guidance Counseling Service. Sylvia obtained her Bachelors of Arts Degree in Criminal Justice minor in Forensic Psychology from Long Island University- CW Post and her Masters of Science in Mental Health Counseling from Long Island University- Brooklyn. She furthered her education in Trauma Studies from the Institute for Contemporary Psychotherapy and is currently pursuing additional training and certification in Clinical Sexology from the Modern Sex Therapy Institutes.
              <br /><br />
              She began her journey as a psychotherapist working with individuals within underserved communities and the NYC criminal justice system. She noticed the difficulty and disconnect in services for those who struggle with their mental well-being. As she searched for answers to questions surrounding the impact of trauma, quickly realizing the work had to start with her. Sylvia fell in love with the experience of processing and challenging beliefs driven by fear. She is truly passionate about growth and evolving as a person, which includes learning to cultivate compassion for yourself to overcome the barriers that stand firmly in your path.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutMe;
