function Hero() {
  return (
    <section className="hero relative general_parent h-[70vh] bg-cover bg-contact-hero-bg bg-no-repeat">
      <div className="general_width flex items-center">
        <div className="flex flex-col w-full md:w-4/6 lg:w-1/2 gap-4 md:gap-8">
          <h1 className="z-10" data-aos="zoom-in">
            Contact Us
          </h1>
          <p
            className="z-10 text-white text-base md:text-lg"
            data-aos="fade-right"
            data-aos-duration="200"
          >
            Do you want to enquire about our pricing, current offers and
            arrangements we can help you with? Give us a call or send in your
            concerns through the form below.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
