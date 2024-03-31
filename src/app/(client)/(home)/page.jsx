import Hero from "./Hero";
import Feature from "./Feature";
import About from "./About";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
