function Hero() {
  return (
    <section className="hero general_parent h-screen text-white bg-home-hero-bg bg-cover bg-no-repeat">
      <div className="flex general_width h-full items-center z-10">
        <div className="flex flex-col gap-8 w-full md:w-4/5 lg:w-1/2">
          <h1 data-aos="zoom-in">The Perfect Hotel in Mykonos</h1>
          <p
            className="text-base md:text-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            If you are looking for a perfect holiday experience with memories
            tox cherish you are at the right place. Let’s plan a reasonable stay
            for you.
          </p>
          <button
            className="bg-white text-semi-black max-w-60 py-3 tracking-widest text-sm font-semibold"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            BOOK YOUR STAY NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
