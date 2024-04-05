import FeatureCard from "@/components/ui/FeatureCard";

export default function SimilarProperty({ properties }) {
  return (
    <section>
      <h2>Discover Similar Properties</h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 ">
        {properties?.slice(0, 6).map(property => (
          <FeatureCard key={property._id + "DetailPage"} data={property} />
        ))}
      </div>
    </section>
  )
}
