"use client";
import { amenitiesArray } from "@constants";
import { Exprerience, Hero, Inside, Review } from "./components";
import CardContainer from "../components/CardContainer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Exprerience />
      <CardContainer
        heading="Amenities & Facilities"
        paragraph="If you are looking for a relaxing, refreshing and rejuvenating
            experience altogether, we offer all of that under one roof."
        buttonText="VIEW ALL"
        cardArray={amenitiesArray}
      />
      <Inside />
      <Review />
    </main>
  );
}

export default Home;
