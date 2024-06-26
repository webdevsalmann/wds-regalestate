import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-96 relative overflow-hidden">
            <div className="relative mx-auto w-fit h-full flex-center flex-col text-center z-10">
                <h1 className="py-1 px-2 bg-blue-950 text-neutral-50 rounded">Discover Your Regal Residence</h1>
                <p className="mt-4 px-2 bg-blue-950  text-neutral-50 rounded text-2xl">Luxury Living Redefined</p>

                <div className="mt-4 flex gap-2">
                    <Link className={buttonVariants()} href="/properties">View all Properties</Link>
                    <Link className={buttonVariants({ variant: "outline" })} href="/properties">Contact Now</Link>
                </div>
            </div>

            <div className="absolute left-0 top-0 w-full h-full right-0">
                <video className="relative size-full object-cover -z-40 " autoPlay loop muted >
                    <source src="/videos/common/hero.mp4" type="video/mp4" />
                </video>
                <Image
                    className="relative size-full -z-50"
                    src='/images/common/hero.png'
                    width={1600}
                    height={700}
                    alt="HeroImage"
                />
            </div>
        </section>
    )
}
