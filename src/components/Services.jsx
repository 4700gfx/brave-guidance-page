import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import servicePlant from '../assets/service-plant.jpg';
import '../index.css'; // Make sure to import your global stylesheet

const Services = () => {
  const scrollRef = useRef(null);

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

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-14 px-6 w-11/12 mx-auto relative">
      <h2 className="text-4xl text-white font-bold text-center mb-10">What We Treat</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-2 hide-scrollbar"
      >
        {servicesInfo.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[300px] md:min-w-[360px] h-[26rem] sm:h-[28rem] rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out transform  hover:shadow-xl"
            style={{
              backgroundImage: `url(${servicePlant})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

            {/* Content */}
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
              <button className="mt-4 bg-black hover:bg-green-600 transition-all duration-300 ease-in-out text-white py-2 px-4 rounded-lg self-start transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
