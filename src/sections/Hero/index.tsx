import { Mint } from "@/components/Mint";

export const Hero: React.FC = () => (
  <section className='flex flex-col w-full items-center text-center 2xl:max-w-screen-2xl mx-auto px-4 pt-[16.5rem] pb-4 mb-40'>
    <h1 className='text-[5rem] font-extrabold leading-[6.25rem] text-[#F8D47A]'>
      <span className='text-[#3383E0]'>Ukrainian NFT Collection</span>
      <br />
      of heroes this war
    </h1>

    <p className=' text-[1.5rem] font-medium mt-6'>
      Anyone can support ukraine in this extremely difficult time.
    </p>

    <Mint />

    <p className='text-[#F8D47A] font-semibold mt-64'>
      100% funds will be transferred to support <br /> the Ukrainian militaryand
      the victims of this war.
    </p>
  </section>
);
