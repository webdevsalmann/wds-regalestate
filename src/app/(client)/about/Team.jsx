import { buttonVariants } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamCard({ imageUrl, name, title }) {
  return (
    <div className="relative border rounded-tl-full rounded-tr-full rounded-b-md overflow-hidden">
      {/* Image Box */}
      <div className="">
        <Image
          className="w-full object-cover aspect-[4/5] overflow-hidden"
          src={imageUrl}
          width={400}
          height={500}
          alt="Team Member"
        />
      </div>

      {/* Info */}
      <div className="p-2">
        <div className="text-center">
        <div className="font-semibold text-2xl">{name}</div>
        <div className="text-sm">{title}</div>
        </div>

        {/* Buttons */}
        <div className="mt-2 flex-between">
          <Link className={buttonVariants({ variant: "" })} href="">
            <Mail className="mr-2 size-4" /> Mail me
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            <Phone className="mr-2 size-4" /> Call Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section className="bg-blue-950 text-neutral-50">
      <div className="mx-auto md:text-center md:w-2/3">
        <h2>Meet Our Team</h2>
        <p className="text-neutral-200">Behind Regal Estate is a team of seasoned professionals with extensive experience in the real estate industry. From expert agents and property managers to skilled consultants and support staff, our team is dedicated to providing the highest level of service and expertise to our clients.</p>
      </div>

      <div className="my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TeamCard imageUrl='/images/persons/6.jpg' name="Alexander Thompson" title="Senior Realtor" />
        <TeamCard imageUrl='/images/persons/8.jpg' name="Dominic Reynolds" title="Senior Realtor" />
        <TeamCard imageUrl='/images/persons/7.jpg' name="Benjamin Hayes" title="Junior Realtor" />
      </div>
    </section>
  )
}
