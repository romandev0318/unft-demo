import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { Element } from "src/types";

export const ElementCard: React.FC<Element> = ({ image, name, rarity }) => (
  <div className='flex flex-col max-w-sm w-full mb-auto lg:max-w-none relative p-2 text-center radial-border rounded-[28px] before:rounded-[29px] before:-z-10'>
    <div className='relative h-[400px] rounded-[20px] overflow-hidden'>
      {image}
    </div>

    <div className={`rarity ${rarity}`}>{camelCaseToTitleCase(rarity)}</div>

    <span className='block mb-10 mx-auto gradient-text bg-clip-text font-bold text-4xl text-transparent tracking-tight'>
      {name}
    </span>

    <span className='font-bold text-[#474747] tracking-tighter pb-5'>
      UA NFT Valanter collection © 2022
    </span>
  </div>
);
