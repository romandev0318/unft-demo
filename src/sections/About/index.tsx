import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowLinkIcon, HeartIcon, ShieldIcon } from "@/assets/svg";
import { aboutImage } from "@/assets/img";

export const About: React.FC = () => (
  <Container
    id='about'
    className='pl-6 pr-0 py-9 md:py-16 lg:pl-16 2xl:pl-36 lg:flex-row'
  >
    <div className='max-w-lg xl:max-w-xl lg:mr-9 xl:mr-24 mb-16 lg:mb-0'>
      <h2 className='block text-[28px] sm:text-4xl font-bold tracking-tight mb-8 xl:mb-32'>
        About Project
      </h2>

      <span className='flex items-center text-2xl text-[#3383E0] font-bold mb-3'>
        <HeartIcon className='mr-4' /> Why we do it?
      </span>
      <p className='text-[#ABABAB] text-base font-normal leading-relaxed mb-9'>
        War. There is a new reality ahead and we want to maximize all the
        opportunities for migrants, their children and build a successful new
        generation. Act and create to help others.
      </p>

      <span className='flex items-center text-2xl text-[#F8D47A] font-bold mb-3'>
        <ShieldIcon className='mr-4' /> What is our target?
      </span>
      <p className='text-[#ABABAB] text-base font-normal leading-relaxed mb-9'>
      Our goal is to help people from Ukraine affected by the war
      </p>

      <Link href='#collection'>
        <a className='flex items-center text-base font-medium group hover:text-[#F8D47A] transition ease-in-out duration-200'>
          Look at collections
          <ArrowLinkIcon className='ml-3 group-hover:fill-[#F8D47A]' />
        </a>
      </Link>
    </div>

    <Image src={aboutImage} alt='card' placeholder='blur' />
  </Container>
);
