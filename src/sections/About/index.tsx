import Image from "next/image";
import Link from "next/link";
import { ArrowLinkIcon, HeartIcon, ShieldIcon } from "@/assets/svg";
import { Container } from "@/components/Container";

export const About: React.FC = () => (
  <Container className='flex items-center relative 2xl:max-w-screen-2xl 2xl:mx-auto py-24 px-36 my-40 mx-8 overflow-hidden'>
    <div className='max-w-xl mr-32'>
      <h2 className='block text-4xl font-bold tracking-tight mb-32'>
        About Project
      </h2>

      <span className='flex items-center text-2xl text-[#3383E0] font-bold mb-3'>
        <HeartIcon className='mr-4' /> Why we do it?
      </span>
      <p className='text-[#ABABAB] text-base font-normal mb-9'>
        Uh oh, we cannot find the page you are looking for. Try going to the
        previous page or homepage or Help Center for more information. Uh oh, we
        cannot find the page you are looking for.
      </p>

      <span className='flex items-center text-2xl text-[#F8D47A] font-bold mb-3'>
        <ShieldIcon className='mr-4' /> What is our target?
      </span>
      <p className='text-[#ABABAB] text-base font-normal mb-9'>
        Uh oh, we cannot find the page you are looking for. Try going to the
        previous page or homepage or Help Center for more information. Uh oh, we
        cannot find the page you are looking for. Try going to the previous page
        or homepage or Help Center for more information.
      </p>

      <Link href='#collection'>
        <a className='flex items-center text-base font-medium group hover:text-[#F8D47A] transition ease-in-out duration-200'>
          Look at collections
          <ArrowLinkIcon className='ml-3 group-hover:fill-[#F8D47A]' />
        </a>
      </Link>
    </div>

    <div className='absolute top-0 w-[632px] h-[462px] -right-[6.7rem]'>
      <Image
        src='/img/flag-about-1.png'
        alt='card'
        layout='fill'
        className='-translate-x-20'
      />
    </div>

    <Image
      src='/img/about.png'
      alt='card'
      width={661}
      height={764}
      className='scale-110 translate-y-6'
    />

    <div className='absolute top-0 w-[364px] h-[544px] -right-5'>
      <Image src='/img/flag-about.png' alt='card' layout='fill' />
    </div>
  </Container>
);
