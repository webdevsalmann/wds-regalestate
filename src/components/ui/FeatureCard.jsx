import { ArrowRight, Bath, BedDouble, Grid, Utensils } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import Link from "next/link";
import { buttonVariants } from "./button";
import sanityService from "@/lib/sanityConfig";

export default function FeatureCard({ data }) {
    const { slug, images, address, bedroom, bathroom, kitchen, home_size, status, } = data || {};
    const imageUrl = sanityService.getImageUrl(images[0])
    // console.log(data)

    const statusColors = () => {
        if (status === 'available') {
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

    return (
        <Link className="relative w-full hover:shadow-2xl border rounded-md hover:scale-105 group transition-all" href={`/properties/${slug.current}`}>
            <div className="relative aspect-[5/4] rounded-t-md overflow-hidden">
                <Image
                    className="size-full aspect-[5/4] object-cover"
                    src={imageUrl.width(800).url() || '/images/common/error-image.png'}
                    width={1600}
                    height={700}
                    alt={`Property at ${address}`}
                />
            </div>
            <div className="p-2 ">
                <div className="text-lg font-semibold group-hover:underline">
                    {address}
                </div>

                {/* Short About */}
                <div className="flex gap-2 justify-between flex-wrap">
                    {/* Bedroom */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="mt-2 p-1 flex-center gap-1 text-sm border cursor-default rounded">
                                <BedDouble className="size-4" /> <span>{bedroom}</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Bedroom</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Bathroom */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="mt-2 p-1 flex-center gap-1 text-sm border cursor-default rounded">
                                <Bath className="size-4" /> <span>{bathroom}</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Bathroom</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Kitchen */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="mt-2 p-1 flex-center gap-1 text-sm border cursor-default rounded">
                                <Utensils className="size-4" /> <span>{kitchen}</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Kitchen</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Area */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="mt-2 p-1 flex-center gap-1 text-sm border cursor-default rounded">
                                <Grid className="size-4" /> <span>{home_size} SqFt</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Area Square-feet</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

                {/* Availability */}
                <div className="mt-3 grid gap-2 grid-cols-3">
                    <div className="px-1 w-full text-sm text-text-left font-semibold rounded-sm">
                        Residential
                    </div>
                    <div className={`px-1 mx-auto w-fit text-sm text-center font-semibold rounded-sm capitalize ${statusColors()}`}>
                        {status}
                    </div>
                    <div className="px-1 w-full text-sm text-right text-primary font-bold rounded-sm">$ 4000</div>
                </div>
            </div >
        </Link >
    )
}
