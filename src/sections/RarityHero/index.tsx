import Image from "next/image";
import { rarityHeroBgImage } from "@/assets/img";

export const RarityHero: React.FC = () => (
  <section className='flex flex-col relative items-center text-center mx-2 md:mx-5 2xl:mx-auto max-w-screen-2xl px-2 md:px-16 pt-[110px] md:pt-44 pb-12 md:pb-24 mb-20 md:mb-40 hero-border rounded-b-[32px] md:rounded-b-[100px] xl:rounded-b-[140px] overflow-hidden'>
    <h1 className='text-[27px] leading-10 md:leading-[5rem] md:text-[3.5rem] lg:text-[5rem] font-extrabold xl:leading-[6.25rem] text-[#F8D47A] tracking-tight'>
      Rarity elements
    </h1>

    <p className='text-[15px] leading-5 md:leading-10 md:text-[1.5rem] text-white/80 font-medium mt-6'>
      Here you can get acquainted with the attributes of the collections
    </p>

    <div className='-z-10'>
      <Image
        src={rarityHeroBgImage}
        alt='hero'
        priority
        objectFit='cover'
        placeholder='blur'
        layout='fill'
      />
    </div>
  </section>
);
