import { Exprerience, Hero } from "./components";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Exprerience />
    </main>
  );
}

export default Home;
