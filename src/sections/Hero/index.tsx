import Image from "next/image";
import {
  heroBgImage,
  collectionLeftImage,
  collectionRightImage,
} from "@/assets/img";
import { Mint } from "@/components/Mint";

export const Hero: React.FC = () => (
  <section className='flex flex-col relative items-center text-center mx-2 md:mx-5 2xl:mx-auto max-w-screen-2xl px-2 md:px-4 pt-[120px] md:pt-64 pb-4 mb-20 md:mb-40 hero-border rounded-b-[32px] md:rounded-b-[100px] xl:rounded-b-[140px] overflow-hidden xl:overflow-visible'>
    <h1 className='text-[27px] leading-10 md:leading-[5rem] md:text-[3.5rem] xl:text-[5rem] font-extrabold xl:leading-[6.25rem] text-[#F8D47A] tracking-tight'>
      <span className='text-[#3383E0]'>Ukrainian NFT Collection</span>
      <br />
      of heroes this war
    </h1>

    <p className='text-[15px] leading-5 md:text-[1.5rem] text-white/80 font-medium mt-6'>
      Anyone can support ukraine in this extremely difficult time.
    </p>

    <Mint />

    <p className='font-semibold text-[#F8D47A] text-xs leading-5 md:text-2xl md:leading-8 mt-14 md:mt-64'>
      100% funds will be transferred to support <br /> the Ukrainian militaryand
      the victims of this war.
    </p>

    <div className='absolute pt-0 xl:pt-[6.5rem] 2xl:pt-0 top-[84px] w-[780px] left-1/2 -translate-x-1/2 md:w-[1534px] xl:w-full 2xl:w-[1534px] md:top-44 h-full lg:h-[970px] xl:h-[84.6%] 2xl:h-[970px] rounded-none md:rounded-b-[100px] xl:rounded-b-[140px] overflow-hidden -z-10'>
      <Image
        src={heroBgImage}
        alt='hero'
        width={1536}
        height={1083}
        className='object-cover w-[100%]'
        priority
        placeholder='blur'
      />
    </div>

    <div className='hidden xl:block w-[42%] top-[460px] 2xl:w-[580px] 2xl:h-[705px] absolute 2xl:top-[430px] -left-24 -z-10'>
      <Image
        src={collectionLeftImage}
        alt='collection left'
        priority
        placeholder='blur'
      />
    </div>

    <div className='hidden xl:block w-[42%] top-[500px] 2xl:w-[604px] 2xl:h-[642px] absolute 2xl:top-[450px] -right-24 -z-10'>
      <Image
        src={collectionRightImage}
        alt='collection right'
        priority
        placeholder='blur'
      />
    </div>
  </section>
);
