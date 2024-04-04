import FeatureCard from "@/components/ui/FeatureCard";

export default function Properties({ data }) {
    return (
        <section className="pt-4 sm:pt-4 md:pt-4 lg:pt-4">
            {/* Total number of Property */}
            <div className="mb-4 text-xl font-semibold">
                {data.length} propert{data.length > 1 ? 'ies' : 'y'}
            </div>

            {/* Property cards */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 ">
                {data && data.map((property, i) => (
                    <FeatureCard key={property._key + (i * i)} data={property} />
                ))}
            </div>

            {data.length == 0 && (
                <div className="p-8 w-ful bg-muted rounded-md">
                    <div className="text-center text-lg font-semibold">No Properties Found</div>
                </div>
            )}

            {/* Show loading */}
            {/* {isPending && (
            <>
              <Skeleton className="size-full aspect-[4/5] rounded-md" />
            </>
          )} */}
            {/* Show Error */}
            {/* {error && <p>Error: {error.message}</p>} */}
        </section>
    )
}
