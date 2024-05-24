function Collage() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex">
        <div className="w-1/2 hidden md:flex">
          <img
            src="/images/amenities/gallery/gallery-1.jpg"
            alt="hotel gallery"
            className="w-1/2 h-fit"
          />
          <img
            src="/images/amenities/gallery/gallery-2.jpg"
            alt="hotel gallery"
            className="w-1/2 h-fit"
          />
        </div>
        <img
          src="/images/amenities/gallery/gallery-3.jpg"
          alt="hotel gallery"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex">
        <img
          src="/images/amenities/gallery/gallery-4.jpg"
          alt="hotel gallery"
          className="w-full md:w-1/2"
        />
        <div className="w-1/2 hidden md:flex">
          <img
            src="/images/amenities/gallery/gallery-5.jpg"
            alt="hotel gallery"
            className="w-full md:w-1/2"
          />
          <img
            src="/images/amenities/gallery/gallery-6.jpg"
            alt="hotel gallery"
            className="w-1/2"
          />
        </div>
      </div>
    </section>
  );
}

export default Collage;
