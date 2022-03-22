/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Links } from "@/components/Links";
import { links } from "@/data/links";

export const Footer: React.FC = () => (
  <footer className='bg-black'>
    <div className='flex flex-col space-y-16 md:space-y-20 px-4 md:px-8 py-16 2xl:max-w-screen-2xl mx-auto'>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center'>
        <Link href='/'>
          <a>
            <img
              className='h-12 lg:h-16'
              src='/img/UNFTLogo.png'
              alt='unft logo'
            />
          </a>
        </Link>

        <p className='flex flex-col space-y-8 text-center md:text-right whitespace-nowrap text-sm sm:text-base'>
          <span className='font-bold text-[#A9A9A9]'>
            TRIP smart contract address:
          </span>
          <span
            className='text-white font-normal'
            // onClick={() => {
            //   navigator.clipboard.writeText(
            //     "0x692f6bbea88da58268cce0fc92897e416eccc03c"
            //   );
            // }}
          >
            0x692f6bbea88da58268cce0fc92897e416eccc03c
          </span>
        </p>
      </div>

      <div className='flex flex-col space-y-12 space-y-reverse md:space-y-0 md:flex-row justify-between items-center text-sm sm:text-base'>
        <span className='text-white order-last md:order-first opacity-60'>
          Copyright © 2022 UNFT. All right reserve
        </span>

        <div className='flex items-center space-x-6 order-first md:order-none transition ease-out delay-200'>
          <Links links={links} className='opacity-60' />
        </div>

        <div className='flex flex-col md:flex-row items-center text-white space-x-0 md:space-x-9 space-y-4 md:space-y-0'>
          <Link href='privacy-policy'>
            <a className='opacity-60 hover:text-[#F8D47A] hover:opacity-100 transition ease-out delay-200'>
              Privacy Policy
            </a>
          </Link>
          <Link href='terms'>
            <a className='opacity-60 hover:text-[#F8D47A] hover:opacity-100 transition ease-out delay-200'>
              Terms &#38; Conditions
            </a>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
