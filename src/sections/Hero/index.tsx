import { Mint } from "@/components/Mint";
import Image from "next/image";

export const Hero: React.FC = () => (
  <section className='flex flex-col relative items-center text-center mx-5 2xl:mx-auto max-w-screen-2xl px-4 pt-64 pb-4 mb-40 hero-border rounded-b-[140px]'>
    <h1 className='text-[5rem] font-extrabold leading-[6.25rem] text-[#F8D47A]'>
      <span className='text-[#3383E0]'>Ukrainian NFT Collection</span>
      <br />
      of heroes this war
    </h1>

    <p className='text-[1.5rem] font-medium mt-6'>
      Anyone can support ukraine in this extremely difficult time.
    </p>

    <Mint />

    <p className='text-[#F8D47A] font-semibold mt-64'>
      100% funds will be transferred to support <br /> the Ukrainian militaryand
      the victims of this war.
    </p>

    <div className='absolute top-44 right-0 left-0 h-[974px] rounded-b-[140px] overflow-hidden -z-10'>
      <Image src='/img/hero-bg.png' alt='hero' width={1536} height={1083} />
    </div>

    <div className='absolute top-[430px] -left-20 -z-10'>
      <Image
        src='/img/collection-left.png'
        alt='collection left'
        width={645 * 0.9}
        height={784 * 0.9}
      />
    </div>

    <div className='absolute top-[450px] -right-24 -z-10'>
      <Image
        src='/img/collection-right.png'
        alt='collection right'
        width={671 * 0.9}
        height={713 * 0.9}
      />
    </div>
  </section>
);
