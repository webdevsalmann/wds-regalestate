import { ArrowRight, Bath, BedDouble, Grid, Utensils } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import Link from "next/link";
import { buttonVariants } from "./button";

export default function FeatureCard() {
    return (
        <Link className="relative w-full hover:shadow-2xl border rounded-md overflow-hidden hover:scale-105 group transition-all" href='/properties'>
            <div className="relative aspect-[5/4]">
                <Image
                    className="size-full aspect-[5/4] object-cover"
                    src='/images/common/hero.png'
                    width={1600}
                    height={700}
                    alt="HeroImage"
                />
            </div>
            <div className="p-2 ">
                <div className="text-lg font-semibold group-hover:underline">Address</div>

                {/* Short About */}
                <div className="flex gap-2 justify-between flex-wrap">
                    {/* Bedroom */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="mt-2 p-1 flex-center gap-1 text-sm border cursor-default rounded">
                                <BedDouble className="size-4" /> <span>2</span>
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
                                <Bath className="size-4" /> <span>2</span>
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
                                <Utensils className="size-4" /> <span>2</span>
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
                                <Grid className="size-4" /> <span>2000 SqFt</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Area Square-feet</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

                {/* Availability */}
                <div className="mt-3 grid gap-2 grid-cols-3  overflow-hidden">
                    <div className="px-1 mx-auto w-fit text-sm text-center font-semibold rounded-sm">
                        Residential
                    </div>
                    <div className="px-1 mx-auto w-fit text-sm text-center bg-green-100 text-green-950 font-semibold rounded-sm">
                        Available
                    </div>
                    <div className="px-1 mx-auto w-fit text-sm text-center text-primary font-semibold rounded-sm">$ 4000</div>
                </div>

                {/* Pricing */}
                {/* <div className="mt-2 flex-between">
                    <div className="mt-2 text-primary font-bold">$ 4000</div>
                    <Link className={`${buttonVariants({ variant: 'outline', size: 'sm' })} flex-center `} href='/properties'>
                        Open <ArrowRight className="ml-2 size-4" />
                    </Link>
                </div> */}
            </div >
        </Link >
    )
}
