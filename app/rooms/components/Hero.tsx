function Hero() {
  return (
    <section className="hero general_parent h-[85vh] bg-room-hero-bg bg-cover bg-no-repeat items-center">
      <div className="general_width">
        <div className="w-full md:w-1/2 h-fit flex flex-col gap-12 justify-center">
          <h1 className="z-10" data-aos="zoom-out">
            Rooms & Accommodation
          </h1>
          <p
            className="text-white z-10"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            If you are looking for a home away from home, just walk in here. You
            can get both, an incredible and relaxing experience while you are on
            a holiday. Take a closer look into the rooms we offer and pick the
            one for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
