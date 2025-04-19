import heroVid from '../assets/green-waterfall.mp4';

const Hero = () => {
  return (
    <section className="relative mx-auto my-10 w-11/12 h-[60vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl" id='Hero'>
      
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
      >
        <source src={heroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-main-light-green mb-4 max-w-3xl leading-snug sm:leading-tight">
          Are You Ready to Begin Your Journey?
        </h1>

        <p className="text-primary-white max-w-xl text-base sm:text-md font-light leading-relaxed text-center">
          At Brave Guidance, we believe healing begins with connection. Through a holistic and compassionate approach,
          we help you strengthen self-awareness, embrace change, and move forward with clarity.
        </p>

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-white hover:text-black hover:shadow-md">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
