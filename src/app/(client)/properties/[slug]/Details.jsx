import { PortableText } from '@portabletext/react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Bath, BedDouble, Box, CalendarClock, CarFront, Earth, LandPlot, Map, Ruler, Tag, ThumbsUp, Utensils } from 'lucide-react';


export default function Details({ data }) {
  let { _id, address, city, state, description, status, bedroom, bathroom, kitchen, parking, built_year, lot_size, home_size, amenities, } = data || {};

  const statusColors = () => {
    if (status && status === 'available') {
      return 'bg-green-100 text-green-950';
    } else if (status === 'rented' || status === 'pending') {
      return 'bg-yellow-100 text-yellow-950';
    } else if (status === 'sold') {
      return 'bg-red-100 text-red-950';
    } else if (status === 'coming_soon') {
      return 'bg-zinc-100 text-zinc-950';
    } else {
      return 'bg-zinc-100 text-zinc-950';
    }
  };

  const iconClass = 'mr-4 size-5 inline';
  const titleClass = "font-medium capitalize";
  const descriptionClass = "font-medium text-right capitalize";

  return (
    <section className='pt-0 sm:pt-0 md:pt-0 lg:pt-0 mx-auto sm:w-3/5'>
      <h2 className='mb-0'>Details About This Property at <span className='text-primary'>{address}</span></h2>
      <PortableText value={description} />

      <Table className='my-12 font-semibold text-lg'>
        <TableBody>
          {/* Address */}
          <TableRow className="bg-slant-lines">
            <TableCell className={titleClass}><LandPlot className={iconClass} />Address</TableCell>
            <TableCell className={descriptionClass}>{address}</TableCell>
          </TableRow>

          {/* City */}
          <TableRow className="bg-slant-lines">
            <TableCell className={titleClass}><Map className={iconClass} />City</TableCell>
            <TableCell className={descriptionClass}>{city}</TableCell>
          </TableRow>

          {/* State */}
          <TableRow className="bg-slant-lines">
            <TableCell className={titleClass}><Earth className={iconClass} />State</TableCell>
            <TableCell className={descriptionClass}>{state}</TableCell>
          </TableRow>

          {/* Home Size */}
          <TableRow className="bg-slant-lines">
            <TableCell className={titleClass}><Ruler className={iconClass} />Home Size</TableCell>
            <TableCell className={descriptionClass}>{home_size} Sq feet</TableCell>
          </TableRow>

          {/* Lot Size */}
          <TableRow className="bg-slant-lines">
            <TableCell className={titleClass}><Box className={iconClass} />Lot Size</TableCell>
            <TableCell className={descriptionClass}>{lot_size} Acres</TableCell>
          </TableRow>

          {/* Bedroom */}
          <TableRow>
            <TableCell className={titleClass}><BedDouble className={iconClass} />Bedroom</TableCell>
            <TableCell className={descriptionClass}>{bedroom} Room{bedroom > 1 ? 's' : null}</TableCell>
          </TableRow>

          {/* Bathroom */}
          <TableRow>
            <TableCell className={titleClass}><Bath className={iconClass} />Bathroom</TableCell>
            <TableCell className={descriptionClass}>{bathroom} Room{bathroom > 1 ? 's' : null}</TableCell>
          </TableRow>

          {/* Kitchen */}
          <TableRow>
            <TableCell className={titleClass}><Utensils className={iconClass} />Kitchen</TableCell>
            <TableCell className={descriptionClass}>{kitchen} Room{kitchen > 1 ? 's' : null}</TableCell>
          </TableRow>

          {/* Parking */}
          <TableRow>
            <TableCell className={titleClass}><CarFront className={iconClass} />Parking</TableCell>
            <TableCell className={descriptionClass}>{parking} car garage</TableCell>
          </TableRow>

          {/* Year Built */}
          <TableRow>
            <TableCell className={titleClass}><CalendarClock className={iconClass} />Year Built</TableCell>
            <TableCell className={descriptionClass}>At {built_year}</TableCell>
          </TableRow>

          {/* Status */}
          <TableRow>
            <TableCell className={titleClass}><Tag className={iconClass} />Status</TableCell>
            <TableCell className={descriptionClass}><span className={`${statusColors()} px-1 rounded`}>{status}</span></TableCell>
          </TableRow>

          {/* Amenities */}
          <TableRow>
            <TableCell className={titleClass}><ThumbsUp className={iconClass} />Amenities</TableCell>
            <TableCell className={`${descriptionClass} flex flex-row-reverse gap-2 flex-wrap text-sm`}>
              {amenities?.map((item, i) => (
                <span className='px-1 bg-gray-200 rounded capitalize' key={_id + i}>{item}</span>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      

    </section >
  )
}
