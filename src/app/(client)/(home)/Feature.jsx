import FeatureCard from "@/components/ui/FeatureCard";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import sanityService from "@/lib/sanityConfig";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";

export default async function Feature() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['properties'],
  //   queryFn: async () => {
  //     try {
  //       return await sanityService.getAllProperties();
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //       throw error;
  //     }
  //   }
  // });

  const filter = `*[_type=="property"]`;
  const query = `${filter}{
    _id,
    slug,
    images,
    address,
    status,
    bedroom,
    bathroom,
    kitchen,
    home_size,
  }`;

  const properties = await client.fetch(query);

  return (
    <section>
      <h2 className="text-center">Featured Properties</h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 ">
        {properties?.slice(0, 6).map(property => (
          <FeatureCard key={property._id} data={property} />
        ))}
      </div>

      {/* View more button */}
      <div className="mt-12 flex-center">
        <Link className={buttonVariants({ variant: "secondary" })} href="/properties">View more</Link>
      </div>
    </section>
  );
}
