import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({ testimonial, name, imageUrl }) {
    return (
        <div className="p-4 relative text-center rounded">
            <div className="mb-4 text-muted-foreground flex-center rotate-180"><Quote /></div>
            <div className="flex-center">
                <div className="flex gap-1">
                    <Star className="size-5 text-yellow-500" />
                    <Star className="size-5 text-yellow-500" />
                    <Star className="size-5 text-yellow-500" />
                    <Star className="size-5 text-yellow-500" />
                    <Star className="size-5 text-yellow-500" />
                </div>
            </div>
            <div className="p-4 font-semibold">"{testimonial}"</div>
            <div className="flex-center">
                <Image
                    className="size-14 aspect-square object-cover rounded-full"
                    src={`/images/persons/${imageUrl}.jpg`}
                    width={1600}
                    height={700}
                    alt={name}
                />
            </div>
            <div className="mt-2 italic font-medium">~{name}</div>
        </div>
    )
}
