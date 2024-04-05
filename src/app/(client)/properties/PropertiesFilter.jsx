"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";


const filterOptions = [
    { title: "All", value: "all" },
    { title: "Available", value: "available" },
    { title: "Rented", value: "rented" },
    { title: "Sold", value: "sold" },
    { title: "Under Offer", value: "under-offer" },
    { title: "Pending", value: "pending" },
    { title: "Off Market", value: "off-market" },
    { title: "Coming Soon", value: "coming-soon" },
    { title: "Reduced Price", value: "reduced-price" },
    { title: "Expired", value: "expired" },
    { title: "Withdrawn", value: "withdrawn" },
    { title: "Under Renovation", value: "under-renovation" },
    { title: "Foreclosure", value: "foreclosure" }
]

export default function PropertiesFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get('status') ?? '';
    const defaultSearchQuery = searchParams.get('search') ?? '';
    // console.log(searchParams)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const searchQuery = formData.get('search')
        router.replace(`/properties/?search=${searchQuery}`)
    }

    return (
        <section className="py-0 sm:py-0 md:py-0 lg:py-0 border-b">
            <h2 className="text-center">Explore Our Properties</h2>

            {/* Search Box */}
            <div className="mx-auto w-full md:w-2/3">
                <form className="flex gap-2" onSubmit={handleOnSubmit}>
                    <Input
                        className=""
                        id="search"
                        name="search"
                        type="search"
                        autoComplete="off"
                        placeholder="Search area here"
                        defaultValue={defaultSearchQuery}
                    />
                    <Button variant="secondary">Search</Button>
                </form>

                {/* Filter Buttons */}
                <div className="my-4 flex gap-2 flex-wrap ">
                    {filterOptions.map(item => (
                        <Button
                            className='text-sm'
                            variant={status == item.value ? "secondary" : "outline"}
                            onClick={() => { router.replace(`/properties/?status=${item.value}`) }}
                            key={item.title}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
        </section >
    )
}
