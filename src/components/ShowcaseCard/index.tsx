import { ShowcaseCardType } from "src/types";

export const ShowcaseCard: React.FC<ShowcaseCardType> = ({ image, title }) => (
  <div className='flex flex-col max-w-sm w-full lg:max-w-none space-y-10 relative p-2 text-center radial-border rounded-[28px] before:rounded-[29px] before:-z-10'>
    <div className='relative h-[469px] rounded-[20px] overflow-hidden'>
      {image}
    </div>

    <span className='block mx-auto gradient-text bg-clip-text font-bold text-4xl text-transparent tracking-tight'>
      {title}
    </span>

    <span className='font-bold text-[#474747] tracking-tighter pb-5'>
      UA NFT Valanter collection © 2022
    </span>
  </div>
);
