"use client";
import { Form, Hero } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main>
      <Hero />
      <Form />
    </main>
  );
}

export default Contact;
