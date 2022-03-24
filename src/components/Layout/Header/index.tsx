/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Links } from "@/components/Links";
import { links } from "@/data/links";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

  const router = useRouter();

  const toggleOpen = () => setOpen((state) => !state);

  useEffect(() => {
    setOpen(false);
  }, [router]);

  useEffect(() => {
    const handleScroll = () => setSmall(window.pageYOffset > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`opacity-100 bg-black/0 fixed w-full top-0 left-0 right-0 transition-[background-color,backdrop-filter,height,padding] ease-in-out delay-200 z-10 
      ${open ? "h-full" : "h-[100px] md:h-[164px] lg:h-[176px]"} 
      ${small && !open ? "h-[84px] md:h-[100px] lg:h-[112px]" : ""} 
      ${small || open ? "opacity-100 backdrop-blur-lg bg-black/70" : ""}`}
    >
      <div
        className={`flex items-center w-full 2xl:max-w-screen-2xl mx-auto justify-between transition-[padding] ease-in-out delay-200 
        ${small ? "px-4 xl:px-8 py-6 md:py-8" : "px-8 xl:px-20 py-8 md:py-16"}`}
      >
        <div>
          <Link href='/'>
            <a>
              <img
                className='h-9 lg:h-12'
                src='/img/UNFTLogo.png'
                alt='unft logo'
              />
            </a>
          </Link>
        </div>

        <div
          className={`block md:hidden ${open ? "open" : ""}`}
          id='toggler'
          onClick={toggleOpen}
        ></div>

        <nav
          className={`flex flex-col space-y-4 text-[#8A8A8A] text-center font-medium text-2xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:space-y-0 md:flex md:flex-row md:text-base md:opacity-100 md:space-x-4 lg:space-x-9 md:pointer-events-auto md:absolute transition ease-out delay-200 z-10 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href='/#about'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              About
            </a>
          </Link>
          <Link href='/#roadmap'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Roadmap
            </a>
          </Link>
          <Link href='/#collection'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Our Collection
            </a>
          </Link>
          <Link href='/#showcase'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Showcase
            </a>
          </Link>
          <Link href='/rarity'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Rarity
            </a>
          </Link>
        </nav>

        <div
          className={`flex items-center space-x-4 lg:space-x-6 fixed bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-auto md:-translate-x-0 md:opacity-100 md:pointer-events-auto transition ease-out delay-200 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Links links={links} />
        </div>
      </div>
    </header>
  );
};
