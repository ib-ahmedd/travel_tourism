function Hero() {
  return (
    <section className="hero general_parent h-[85vh] w-full bg-amenities-hero-bg bg-center bg-cover bg-no-repeat">
      <div className="general_width h-full flex items-center">
        <div className="z-10 flex flex-col gap-4 md:gap-8 w-full md:w-4/6 lg:w-1/2">
          <h1 data-aos="zoom-out">Amenities & Facilities</h1>
          <p className="text-white" data-aos="fade-right" data-aos-delay="200">
            We do not give you just rooms to stay. We give you an environment so
            you can experience the best while on a holiday with us. Walk into
            our hotel and enjoy a refreshing, rejuvenating, day-off with us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
