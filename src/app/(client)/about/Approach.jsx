import Image from "next/image";

export default function Approach() {
  return (
    <section className="grid gap-12 md:grid-cols-2">
      {/* Details */}
      <div className="size-full flex-center">
        <div className="text-left">
          <h2 className="">Our Approach</h2>
          <p>At Regal Estate, we believe in a personalized approach to real estate, tailoring our services to meet the unique needs and preferences of each client. Whether you're searching for your dream home, selling a prized property, or seeking expert advice on real estate investments, we are here to guide you every step of the way.</p>
        </div>
      </div>
      
      {/* Image */}
      <div className="p-4 md:p-0 md:order-first">
        <Image
          src='/images/illustrations/checkbox.svg'
          width={1600}
          height={900}
          alt="Our Mission"
        />
      </div>
    </section>
  )
}
