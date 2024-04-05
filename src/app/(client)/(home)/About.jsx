
export default function About() {
    return (
        <section className="bg-blue-950 text-neutral-50" id="about">
            <div className="font-2xl md:text-3xl md:w-4/5">As a real estate company rooted in providing comprehensive services, we strive to assist you in finding a home that perfectly complements your lifestyle. Explore our offerings to discover the ideal property tailored to your needs.</div>

            <div className="mt-12 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
                <div className="p-6">
                    <div className="text-4xl font-bold">10+</div>
                    <div className="">Years of Experience</div>
                </div>
                <div className="p-6">
                    <div className="text-4xl font-bold">8</div>
                    <div className="">Realtors in team</div>
                </div>
                <div className="p-6">
                    <div className="text-4xl font-bold">140+</div>
                    <div className="">Properties Sold</div>
                </div>
            </div>
        </section>
    )
}
