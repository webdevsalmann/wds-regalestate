import Image from "next/image";

export default function Mission() {
  return (
    <section className="grid gap-12 md:grid-cols-2">
      {/* Details */}
      <div className="size-full flex-center">
        <div className="text-left">
          <h2 className="">Our Mission</h2>
          <p>Our mission at Regal Estate is to redefine the standard of luxury real estate services by delivering exceptional results with integrity, professionalism, and personalized attention. We are dedicated to helping our clients achieve their property goals and aspirations, whether buying, selling, or investing in prestigious estates.</p>
        </div>
      </div>

      {/* Image */}
      <div className="p-4 md:p-0">
        <Image
          src='/images/illustrations/build-home.svg'
          width={1600}
          height={900}
          alt="Our Mission"
        />
      </div>
    </section>
  )
}
