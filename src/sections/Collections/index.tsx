import Image from "next/image";
import { Container } from "@/components/Container";
import { TridentIcon } from "@/assets/svg";

export const Collections: React.FC = () => (
  <Container
    id='collection'
    className='flex items-center relative 2xl:max-w-screen-2xl 2xl:mx-auto py-24 px-36 mx-8 overflow-hidden'
  >
    <div className='max-w-xl mr-32'>
      <h2 className='block text-4xl font-bold tracking-tight mb-3'>
        Our Collections
      </h2>

      <p className='text-[#ABABAB] text-base font-normal mb-32'>
        Uh oh, we cannot find the page you are looking for. Try going to the
        previous page or homepage or Help Center for more information.
      </p>

      <div className='rounded-3xl bg-[#F8D47A]/20 border border-[#F8D47A] p-6 mb-6 cursor-pointer transition ease-in-out duration-200'>
        <span className='flex items-center text-2xl text-[#F8D47A] font-bold mb-3'>
          <TridentIcon className='mr-2' /> Collection #1
        </span>
        <p className='text-[#BEA875] font-normal'>
          Uh oh, we cannot find the page you are looking for. Try going to the
          previous page or homepage or Help Center for more information.
        </p>
      </div>

      <div className='rounded-3xl border border-[#585858] p-6 group hover:border-[#EDEDED] cursor-pointer transition ease-in-out duration-200'>
        <span className='block text-2xl text-[#A1A1A1] font-bold mb-3 group-hover:text-[#EDEDED] transition ease-in-out duration-200'>
          Collection #2
        </span>
        <p className='text-[#ABABAB] font-normal'>
          Uh oh, we cannot find the page you are looking for. Try going to the
          previous page or homepage or Help Center for more information.
        </p>
      </div>
    </div>

    <div className='scale-125 translate-y-16'>
      <Image
        src='/img/collection.png'
        alt='collection'
        width={822}
        height={719}
      />
    </div>
  </Container>
);
