function Inside() {
  return (
    <section className="general_parent">
      <div className="general_width flex flex-col gap-8 md:items-center">
        <h2>Our Inside Pictures</h2>
        <p>
          Take a look at some pretty pictures captured in and around our
          premises.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col justify-between gap-4 md:gap-0 w-fit md:w-1/3">
              <img
                src="/images/home/inside/gallery-1.jpg"
                alt="gallery image"
                data-aos="fade-right"
              />
              <img
                src="/images/home/inside/gallery-6.jpg"
                alt="gallery image"
                data-aos="fade-right"
              />
            </div>
            <img
              src="/images/home/inside/gallery-2.jpg"
              alt="gallery image"
              className="w-full md:w-2/3"
              data-aos="zoom-out"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src="/images/home/inside/gallery-3.jpg"
              alt="gallery image"
              className="w-full md:w-2/3"
              data-aos="zoom-in"
            />
            <div className="flex flex-col justify-between gap-4 md:gap-0 w-fit md:w-1/3">
              <img
                src="/images/home/inside/gallery-5.jpg"
                alt="gallery image"
                data-aos="fade-left"
              />
              <img
                src="/images/home/inside/gallery-4.jpg"
                alt="gallery image"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inside;
