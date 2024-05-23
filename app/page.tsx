import { Amenities, Exprerience, Hero, Inside } from "./components";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Exprerience />
      <Amenities />
      <Inside />
    </main>
  );
}

export default Home;
