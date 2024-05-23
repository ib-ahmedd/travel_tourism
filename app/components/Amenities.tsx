import { Card } from "@components";
import { amenitiesArray } from "@constants";

function Amenities() {
  return (
    <section className="general_parent">
      <div className="general_width flex flex-col gap-8">
        <h2>Amenities & Facilities</h2>
        <div className="flex md:justify-between gap-8 lg:gap-0 items-start lg:items-center flex-col lg:flex-row">
          <p className="lg:w-1/2 text-text-gray">
            If you are looking for a relaxing, refreshing and rejuvenating
            experience altogether, we offer all of that under one roof.
          </p>
          <button className="generic_button">VIEW ALL</button>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between gap-8">
          {amenitiesArray.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
