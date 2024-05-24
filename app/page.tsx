import { amenitiesArray } from "@constants";
import { Exprerience, Hero, Inside, Review } from "./components";
import CardContainer from "./components/CardContainer";

function Home() {
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
