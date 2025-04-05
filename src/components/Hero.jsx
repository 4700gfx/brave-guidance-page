import heroVid from '../assets/green-waterfall.mp4';

const Hero = () => {
  return (
    <section className="relative mx-auto my-10 w-11/12 h-[50vh] overflow-hidden rounded-4xl">
      
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

      {/* Dark overlay to dim video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      {/* Overlay content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6">
        <h1 className="w-4/8 text-4xl md:text-6xl text-main-light-green mb-5 font-semibold text-center">
          Are You Ready To Start Your Journey?
        </h1>
        <p className='text-primary-white text-left w-4/8 mx-auto my-5'>
          At Brave Guidance our mission to is works through a holistic approach to strengthen your awareness and provide insight into your journey of change and growth. Her primary goal is to ensure a safe environment for you to be heard and feel understood without fear or judgment.
        </p>

        <button className='bg-black text-white w-1/8 p-3 rounded-4xl hover:bg-white  hover:text-black transition duration-300'>Start Now!</button>
      </div>
    </section>
  );
};

export default Hero;
