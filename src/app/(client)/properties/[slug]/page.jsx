// "use client"
import sanityService from "@/lib/sanityConfig";
import { useQuery } from "@tanstack/react-query";
import Details from "./Details";
import ImageGallery from "./ImageGallery";
import OtherProperty from "./OtherProperty";
import Contact from "@/components/shared/Contact";

export default async function page({ params }) {
    const property = await sanityService.getPropertyBySlug(params.slug)
    // const slug = params.slug;
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['property'],
    //     queryFn: async () => {
    //         try {
    //             return await sanityService.getPropertyById(slug);
    //         } catch (error) {
    //             console.error("Error fetching property:", error);
    //             throw error;
    //         }
    //     }
    // });

    const similarProperty = await sanityService.getSimilarPropertyByStatus(property.status)
    console.log(similarProperty)

    return (
        <>
            <h2 className="mb-0 text-center">Property at <span className='text-primary'>{property.address}</span></h2>
            <ImageGallery data={property} />
            <Details data={property} />
            <OtherProperty properties={similarProperty} />
            <Contact />
        </>
    )
}
