import FeatureCard from "@/components/ui/FeatureCard";

export default function OtherProperty({ properties }) {
  return (
    <section className="bg-muted">
      <h2>View Similar Property</h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 ">
        {properties?.slice(0, 6).map(property => (
          <FeatureCard key={property._id + "DetailPage"} data={property} />
        ))}
      </div>
    </section>
  )
}
