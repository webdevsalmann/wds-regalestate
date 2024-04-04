import FeatureCard from "@/components/ui/FeatureCard";
import { Skeleton } from "@/components/ui/skeleton";
import sanityService from "@/lib/sanityConfig";
import { useQuery } from "@tanstack/react-query";
import Properties from "./Properties";
import PropertiesFilter from "./PropertiesFilter";
import Contact from "@/components/shared/Contact";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

export default async function page({ searchParams }) {
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
  
  const { status, search } = searchParams;
  const statusQuery = status && status !== 'all' ? ` && status == "${status}"` : '';
  const searchFilter = search ? ` && address match "${search}"` : '';
  const filter = `*[_type=="property"${statusQuery}${searchFilter}]`;
  
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
    <>
      <PropertiesFilter />
      <Properties data={properties} />
      <Contact className='bg-muted' title='Inquire at any time' />
    </>
  )
}
