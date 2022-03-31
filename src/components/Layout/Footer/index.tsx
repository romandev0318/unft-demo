import Image from "next/image";
import Link from "next/link";
import { CGTLogoImage, UNFTLogoImage } from "@/assets/img";
import { Links } from "@/components/Links";
import { links } from "@/data/links";

export const Footer: React.FC = () => (
  <footer className='bg-black'>
    <div className='flex flex-col space-y-16 md:space-y-20 px-4 md:px-8 py-16 2xl:max-w-screen-2xl mx-auto'>
      <div className='flex flex-col relative space-y-12 md:space-y-0 md:flex-row justify-between items-center'>
        <Link href='/'>
          <a className='block w-[145px] lg:w-[193px] h-12 lg:h-16'>
            <Image src={UNFTLogoImage} alt='unft logo' />
          </a>
        </Link>

        <div className='md:absolute bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-[calc(100%+40px)] lg:translate-y-0 flex flex-col items-center space-y-2 order-1 sm:order-auto'>
          <span className='text-[#A9A9A9] font-semibold text-sm'>
            In partnership with
          </span>
          <Image src={CGTLogoImage} alt='CGT' />
        </div>

        <p className='flex flex-col space-y-8 text-center md:text-right whitespace-nowrap text-sm sm:text-base'>
          <span className='font-bold text-[#A9A9A9]'>
            TRIP smart contract address:
          </span>
          <span className='text-white font-normal'>
            {process.env.CONTRACT_ADDRESS}
          </span>
        </p>
      </div>

      <div className='flex flex-col space-y-12 space-y-reverse md:space-y-0 md:flex-row justify-between items-center text-sm sm:text-base'>
        <span className='text-white text-sm order-last md:order-first opacity-60'>
          UNFT 2022. All right reserve
        </span>

        <div className='flex items-center space-x-6 order-first md:order-none transition ease-out delay-200'>
          <Links links={links} className='opacity-60' />
        </div>
      </div>
    </div>
  </footer>
);
