import CardContainer from "@app/components/CardContainer";
import { Collage, Hero } from "./components";
import { amenitiesOthersArray, amenitiesPageArray } from "@constants";

function Amenities() {
  return (
    <main className="flex flex-col w-full gap-8 md:gap-20">
      <Hero />

      <CardContainer
        heading="Amenities"
        paragraph="Cursus tempus, tincidunt quis sem sapien id non eget sed in
            consequat tellus phasellus orci in semper elit porttitor eget metus."
        cardArray={amenitiesPageArray}
        buttonText="GET BOOKINGS"
      />

      <Collage />

      <CardContainer
        heading="Other Perks & Facilities"
        paragraph="Looking for more? Well, we believe that every guest walks into our hotel for the best experience. And, we are determined to do that."
        buttonText="GET BOOKINGS"
        cardArray={amenitiesOthersArray}
      />
    </main>
  );
}

export default Amenities;
