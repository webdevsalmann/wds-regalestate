import Hero from "./Hero";
import Feature from "./Feature";
import About from "./About";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Sale from "./Sale";
import Contact from "@/components/shared/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <FAQ />
      {/* <Sale /> */}
      <Testimonial />
      <Contact />
    </main>
  );
}
