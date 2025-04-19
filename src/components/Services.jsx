import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import servicePlant from '../assets/service-plant.jpg';
import '../index.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const servicesInfo = [
    {
      service: 'Depression',
      infomation:
        'Depression is the number one cause of suicide in America. At Brave Guidance, we recognize how isolating and painful it can feel. Our approach focuses on building emotional awareness, re-establishing connection with self and others, and introducing practical tools for everyday healing. We work closely with clients to identify root causes and develop sustainable habits that promote long-term mental wellness.',
      tags: ['#emotional-awareness', '#connection', '#mental-health', '#healing-journey', '#self-care', '#support'],
    },
    {
      service: 'Anxiety',
      infomation:
        'Anxiety can be overwhelming, often manifesting as restlessness, racing thoughts, and physical tension. Brave Guidance offers structured, supportive care to help individuals break the cycle of fear and avoidance. Through mindfulness techniques, cognitive behavioral tools, and personalized guidance, we help clients understand the underlying patterns of anxiety and empower them to reclaim a sense of calm, control, and confidence.',
      tags: ['#mindfulness', '#confidence', '#CBT', '#emotional-support', '#calm', '#mental-wellness'],
    },
    {
      service: 'Trauma',
      infomation:
        'Healing from trauma takes time, compassion, and a sense of safety. Whether it stems from childhood experiences, loss, abuse, or other life-altering events, trauma can deeply impact the nervous system and self-worth. At Brave Guidance, we provide a safe, judgment-free environment where individuals can begin to process and release pain. Our trauma-informed approach focuses on resilience, self-compassion, and reconnection to one’s inner strength.',
      tags: ['#trauma-informed', '#resilience', '#self-compassion', '#healing-space', '#inner-strength', '#nervous-system'],
    },
    {
      service: 'Couple & Family Therapy',
      infomation:
        'At Brave Guidance, we believe that strong relationships are the foundation of a fulfilling life. Our Couples and Family Therapy services are designed to help you navigate challenges, deepen your connections, and build lasting harmony within your relationships. We provide a safe and nonjudgmental space where everyone can feel heard, understood, and empowered to grow—together.',
      tags: ['#relationship-healing', '#family-therapy', '#stronger-together', '#couples-therapy', '#healthy-communication', '#emotional-wellness'],
    },
  ];

  const handleScroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? servicesInfo.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === servicesInfo.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="py-14 px-6 w-11/12 mx-auto relative" id='Services'>
      <h2 className="text-4xl text-white font-bold text-center mb-10">Most Commonly Treated</h2>

      {/* Arrows for phones only */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full sm:hidden"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full sm:hidden"
      >
        <ChevronRight size={24} />
      </button>

      {/* Phone View: Carousel */}
      <div className="flex justify-center sm:hidden">
        <Card item={servicesInfo[currentIndex]} />
      </div>

      {/* Tablet View: 1 Column */}
      <div className="hidden sm:flex lg:hidden flex-col items-center gap-6">
        {servicesInfo.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Desktop View: 4 Column Row */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {servicesInfo.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

// Reusable Card component
const Card = ({ item }) => (
  <div
    className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out transform hover:shadow-xl"
    style={{
      backgroundImage: `url(${servicePlant})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
    <div className="relative z-10 text-white p-6 flex flex-col h-full justify-between">
      <div className="overflow-hidden">
        <h3 className="text-2xl font-bold mb-2">{item.service}</h3>
        <p className="text-sm leading-relaxed mb-3">{item.infomation}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href="https://secure.helloalma.com/providers/sylvia-dowers/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-black hover:bg-green-600 transition-all duration-300 ease-in-out text-white py-2 px-4 rounded-lg self-start transform hover:-translate-y-1"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default Services;
