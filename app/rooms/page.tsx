"use client";
import { useEffect } from "react";
import { Hero, RoomsSec } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

function Rooms() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <main>
      <Hero />
      <RoomsSec />
    </main>
  );
}

export default Rooms;
