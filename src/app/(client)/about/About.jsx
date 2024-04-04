
export default function About() {
  return (
    <>
      <section className="h-80 bg-[url('/images/common/1.jpg')] bg-cover bg-no-repeat">
        <div className="relative mx-auto w-fit h-full flex-center flex-col text-center z-10">
          <h1 className="py-1 px-2 bg-blue-950 text-neutral-50 rounded">
            About Regal Estate
          </h1>
        </div>
      </section>
      <section className="bg-blue-950 text-neutral-50" id="about">
        <div className="font-2xl md:text-3xl md:w-4/5">
          At Regal Estate, we pride ourselves on being leaders in the luxury real estate market, providing unparalleled service and expertise to our clients worldwide. With a passion for excellence and a commitment to integrity, we strive to exceed expectations in every aspect of our business.
        </div>

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
    </>
  )
}
