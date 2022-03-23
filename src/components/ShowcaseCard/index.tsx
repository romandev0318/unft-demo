import Image from "next/image";
import { ShowcaseCardType } from "types";

export const ShowcaseCard: React.FC<ShowcaseCardType> = ({ url, title }) => (
  <div className='flex flex-col space-y-10 relative p-2 text-center radial-border rounded-[28px] before:rounded-[29px] before:-z-10'>
    <div className='relative h-[400px] rounded-[20px] overflow-hidden'>
      <Image src={url} alt={title} className='object-cover' layout='fill' />
    </div>

    <span className='flex mx-auto showcase-title bg-clip-text font-bold text-4xl text-transparent tracking-tight'>
      {title}
    </span>

    <span className='font-bold text-[#474747] tracking-tighter pb-5'>
      UNFT Valanter collection © 2022
    </span>
  </div>
);
