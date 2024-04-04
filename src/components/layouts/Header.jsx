"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/const';

const navigationLinks = [
  {
    title: "Home",
    path: "/",
    varient: "ghost"
  },
  {
    title: "Properties",
    path: "/properties",
    varient: "ghost"
  },
  {
    title: "About",
    path: "/about",
    varient: "ghost"
  },
  {
    title: "Contact",
    path: "/contact",
    varient: ""
  },
]


export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  if (path.includes("/studio")) return null

  return (
    <header className={`w-full bg-background md:border-none ${isNavbarOpen ? "border-b" : "border-none"}`}>
      <nav className="px-[5%] py-4 w-full grid grid-cols-4 justify-center items-center">

        {/* Logo */}
        <Link className="w-fit flex-center col-span-3 md:col-span-2" href="/">
          <Ilogo className="size-10 md:size-14 text-primary" /> <span className='font-bold text-lg md:text-2xl font-lora'>{siteConfig.siteName}</span>
        </Link>

        {/* Hamburger menu */}
        <div className="size-8 flex-center md:hidden justify-self-end col-span-1 md:col-span-2"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        {/* Links */}
        <ul className={`relative py-4 md:py-0 w-full md:w-fit flex-center flex-col gap-4   md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'} col-span-4 md:col-span-2`}>
          {
            navigationLinks.map((item) => (
              <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path} key={item.title}>
                {item.title}
              </Link>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
