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
      className={`flex justify-between content-center fixed w-full 2xl:max-w-screen-2xl mx-auto top-0 left-0 right-0 py-8 px-4 md:py-16 md:px-8 
      ${open ? "open" : ""} ${small ? "small" : ""}`}
    >
      <div className=' z-10'>
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
        className={`flex flex-col space-y-4 text-[#8A8A8A] text-center font-medium text-2xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:space-y-0 md:flex md:flex-row md:text-base md:opacity-100 md:space-x-4 lg:space-x-9 md:pointer-events-auto md:absolute transition ease-out delay-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link href='/#about'>
          <a className='hover:text-[#F8D47A] transition ease-in-out delay-200'>
            About
          </a>
        </Link>
        <Link href='/#roadmap'>
          <a className='hover:text-[#F8D47A] transition ease-in-out delay-200'>
            Roadmap
          </a>
        </Link>
        <Link href='/#collection'>
          <a className='hover:text-[#F8D47A] transition ease-in-out delay-200'>
            Our Collection
          </a>
        </Link>
        <Link href='/#showcase'>
          <a className='hover:text-[#F8D47A] transition ease-in-out delay-200'>
            Showcase
          </a>
        </Link>
        <Link href='/rarity'>
          <a className='hover:text-[#F8D47A] transition ease-in-out delay-200'>
            Rarity
          </a>
        </Link>
      </nav>

      <div
        className={`flex items-center space-x-6 fixed bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-auto md:-translate-x-0 md:opacity-100 md:pointer-events-auto transition ease-out delay-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Links links={links} />
      </div>
    </header>
  );
};
