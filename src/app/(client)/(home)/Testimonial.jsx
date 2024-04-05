import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Emily Johnson",
    testimonial: "I recently found my dream home through Regal Estate, and I couldn't be happier with the experience. Their team was incredibly professional and attentive, guiding me through every step of the process. Thank you, Regal Estate, for making my home buying journey so seamless!"
  },
  {
    id: "testimonial-2",
    name: "Michael Smith",
    testimonial: "Working with Regal Estate was a pleasure from start to finish. Their knowledge of the market, attention to detail, and commitment to customer satisfaction truly set them apart. I highly recommend their services to anyone in search of their perfect property."
  },
  {
    id: "testimonial-3",
    name: "Robert Williams",
    testimonial: "Regal Estate exceeded my expectations in helping me sell my property. Their marketing strategies, negotiation skills, and dedication to achieving the best outcome for me as a seller were truly impressive. I'm grateful for their expertise and support throughout the process."
  }
];

export default function Testimonial() {
  return (
    <section className="bg-yellow-50">
      <h2 className="text-center">Client Stories: <br /> Hear From Our Satisfied Customers</h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
    {testimonials.map((item,i)=>(
      <TestimonialCard testimonial={item.testimonial} name={item.name} key={item.id} imageUrl={i} />
    ))}
      </div>
    </section>
  )
}
