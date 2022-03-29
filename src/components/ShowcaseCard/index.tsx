import { ShowcaseCardType } from "src/types";

export const ShowcaseCard: React.FC<ShowcaseCardType> = ({ image }) => (
  <div className='flex flex-col max-w-sm w-full lg:max-w-none space-y-10 relative p-2 text-center radial-border rounded-[28px] before:rounded-[29px] before:-z-10'>
    <div className='relative h-[469px] rounded-[20px] overflow-hidden'>
      {image}
    </div>
  </div>
);
