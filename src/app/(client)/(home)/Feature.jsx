"use client"
import FeatureCard from "@/components/ui/FeatureCard";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import sanityService from "@/lib/sanityConfig";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Feature() {
  const { isPending, error, data } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      try {
        return await sanityService.getAllProperties();
      } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
      }
    }
  });
  // (data && console.log(data))

  return (
    <section>
      <h2 className="text-center">Featured Properties</h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 ">
        {/* Display the feature cards if data is available */}
        {data && data.slice(0, 6).map(property => (
            <FeatureCard key={property._id} data={property} />
          ))
        }

        {/* Show loading indicator while data is being fetched */}
        {isPending && <Skeleton className="size-full rounded-md" />}
      </div>

      {/* Show error message if there's an error */}
      {error && <p>Error: {error.message}</p>}

      {/* View more button */}
      <div className="mt-12 flex-center">
        <Link className={buttonVariants({ variant: "secondary" })} href="/properties">View more</Link>
      </div>
    </section>
  );
}
