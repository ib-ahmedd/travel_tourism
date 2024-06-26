function Exprerience() {
  return (
    <section className="general_parent">
      <div className="general_width flex flex-col gap-8 md:gap-16 md:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-8">
          <h2>Experience the Life of Mykonos City</h2>
          <p
            className="font-bold text-text-gray text-sm md:text-base"
            data-aos="fade-right"
          >
            We will help you experience Mykonos life in its true sense. From
            living among the residents to eating authentic delicacies you are
            sure to walk home with memories and wonderful moments.
          </p>
          <img
            src="/images/home/experience/about-us.jpg"
            alt="beach"
            className="w-full"
            data-aos="fade-up"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <img
            src="/images/home/experience/about-us-2.jpg"
            alt="beach 2"
            className="w-full"
            data-aos="fade-down"
          />
          <p
            className="text-text-gray text-sm md:text-base"
            data-aos="fade-right"
          >
            Surrounded by scenic beauty and attractive tourist attractions we
            make it convenient for you to visit all the beautiful places with
            our inhouse guide. We can also help you arrange transport facilities
            for an easier commute to nearby places.
          </p>
          <button className="generic_button" data-aos="fade-right">
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Exprerience;
