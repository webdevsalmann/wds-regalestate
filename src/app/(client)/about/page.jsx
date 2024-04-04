import Contact from "@/components/shared/Contact";
import About from "./About";
import Approach from "./Approach";
import Mission from "./Mission";
import Team from "./Team";
import WhyChoose from "./WhyChoose";

export default function page() {
  return (
    <>
      <About />
      <Mission />
      <Approach />
      <Team />
      <WhyChoose />
      <Contact />
    </>
  )
}
