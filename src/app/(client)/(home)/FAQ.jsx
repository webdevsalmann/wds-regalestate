import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "What types of properties do you offer?",
    answer: "We offer a wide range of properties including luxury residential homes, commercial properties, land for development, and rental properties."
  },
  {
    id: "faq-2",
    question: "How do I list my property with Regal Estate?",
    answer: "Listing your property with us is simple. Just contact our team through our website or give us a call, and we'll guide you through the process."
  },
  {
    id: "faq-3",
    question: "Do you provide property management services?",
    answer: "Yes, we offer comprehensive property management services to ensure your investment is well-maintained and profitable. Contact us for more information."
  },
  {
    id: "faq-4",
    question: "Can I schedule a consultation with one of your real estate experts?",
    answer: "Absolutely! We encourage clients to schedule consultations with our experienced real estate professionals. Get in touch with us to set up an appointment."
  },
  {
    id: "faq-5",
    question: "Are there any hidden fees when buying or selling a property through Regal Estate?",
    answer: "No, we believe in transparency and honesty in all our transactions. There are no hidden fees when buying or selling a property with us. We'll provide you with a clear breakdown of all costs involved."
  }
];

export default function FAQ() {
  return (
    <section className="bg-blue-950 text-neutral-50">
      <h2 className="text-center">Frequently Asked Questions</h2>

      <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
        <Accordion type="single" collapsible>
          {faqs.map(item => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
