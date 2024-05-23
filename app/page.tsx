import { Amenities, Exprerience, Hero, Inside, Review } from "./components";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Exprerience />
      <Amenities />
      <Inside />
      <Review />
    </main>
  );
}

export default Home;
