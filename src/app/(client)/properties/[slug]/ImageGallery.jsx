"use client"
import sanityService from "@/lib/sanityConfig";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({ data }) {
    const ImageClass = "max-h-24 aspect-video object-cover"
    const { images, address } = data || {};
    const [selectedImage, setSelectedImage] = useState(0)


    return (
        <div className="p-4 h-fit sm:p-8">
            <div className="grid gap-4 lg:grid-cols-4">
                {/* Display Image */}
                <div className="grid lg:col-span-3 aspect-video rounded border overflow-hidden">
                    <Image
                        className="size-full aspect-video object-cover"
                        src={sanityService.getImageUrl(images[selectedImage]).url() || '/images/common/error-image.png'}
                        // src="/images/common/error-image.png"
                        width={800}
                        height={450}
                        alt={`Property at ${address} image`}
                    />
                </div>

                {/* Other Images */}
                <div className="h-fit overflow-x-scroll md:overflow-x-hidden flex lg:grid gap-3 lg:grid-cols-2 md:overflow-y-scroll">
                    {
                        images && images.map((item, i) => (
                            <Image
                                className={`max-h-24 aspect-video object-cover cursor-pointer rounded ${selectedImage == i && "outline outline-4 -outline-offset-4 outline-primary"}`}
                                src={sanityService.getImageUrl(item).url() || '/images/common/error-image.png'}
                                width={800}
                                height={450}
                                alt={`Property at ${address} image`}
                                key={item._key + i}
                                onClick={() => setSelectedImage(i)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
