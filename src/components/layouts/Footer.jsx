"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ilogo } from "../svgs/svgs";
import { siteConfig } from "@/lib/const";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  const path = usePathname();

  if (path.includes("/studio")) return null
  return (
    <footer className="section bg-blue-950 text-neutral-100 border-t">
      <div className="flex gap-8 flex-wrap justify-between">
        {/* About this site */}
        <div className="flex gap-2 items-center self-start">
          <Ilogo className="size-10 md:size-14 text-primary" /> <span className='font-bold text-lg md:text-2xl font-lora'>{siteConfig.siteName}</span>
        </div>

        {/* Quick links */}
        <div className="">
          <div className="mb-4 font-semibold">Quick links</div>
          <ul className="list-inside">
            <li><Link className="hover:underline" href="/properties">Properties</Link></li>
            <li><Link className="hover:underline" href="/about">About</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <div className="font-normal text-lg">Subscribe to our Newsletter</div>
          <Input type="email" placeholder="xyz@mail.com" />
          <Button variation="secondary">Subscribe</Button>
        </div>
      </div>

      <p className="mt-6 text-muted-foreground text-sm text-center">
        Copyright&copy;2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}
