"use client";
import { useEffect } from "react";
import CardContainer from "@components/CardContainer";
import { Collage, Hero } from "./components";
import { amenitiesOthersArray, amenitiesPageArray } from "@constants";
import Aos from "aos";
import "aos/dist/aos.css";

function Amenities() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
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
