import { Castle, Earth, TrendingUp, Wrench } from "lucide-react"

const data = [
  {
    icon: <Castle className="size-7" />,
    title: "Luxury Expertise",
    description: "With a focus on luxury properties, we have the knowledge and resources to assist clients with even the most discerning tastes."
  },
  {
    icon: <Earth className="size-7" />,
    title: "Global Network",
    description: "Through our extensive network of contacts and affiliations, we have access to exclusive listings and opportunities worldwide."
  },
  {
    icon: <Wrench className="size-7" />,
    title: "Exceptional Service",
    description: "We prioritize client satisfaction above all else, delivering exceptional service and results with integrity and professionalism."
  },
  {
    icon: <TrendingUp className="size-7" />,
    title: "Market Insight",
    description: "With our in-depth market knowledge and analysis, we provide valuable insights to help clients make informed decisions."
  },
]

export default function WhyChoose() {
  return (
    <section>
      <h2 className="md:text-center">Why Choose Regal Estate?</h2>

      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {data.map(item => (
          <div className="p-4 bg-muted text-center rounded" key={item.title}>
            <div className="flex-center">{item.icon}</div>
            <div className="py-3 text-lg font-semibold">{item.title}</div>
            <div className="">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
