import FeatureCard from "@/components/ui/FeatureCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Feature() {
  return (
    <section>
      <h2 className="text-center">Featured Properties</h2>

      {/* Feature Card gallery */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>

      <div className="mt-12 flex-center">
        <Link className={buttonVariants({ variant: "secondary" })} href="/properties">View more</Link>
      </div>
    </section>
  )
}
