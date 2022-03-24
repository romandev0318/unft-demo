import { BtnLinks } from "@/components/BtnLinks";
import { btnLinks } from "@/data/links";
import Image from "next/image";

export const Contacts: React.FC = () => (
  <section className='text-center'>
    <strong className='block mb-8 text-4xl font-bold'>
      Got a question or proposal?
    </strong>
    <p className='text-[#ABABAB] text-[14px] mb-16'>
      Send an email to{" "}
      <span className='w-full md:w-auto text-[18px] text-[#F8D47A] font-semibold'>
        unft@support.com
      </span>{" "}
      or find us on social media using the links below
    </p>

    <div className='flex justify-center relative overflow-hidden pt-11 pb-40'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[463px]'>
        <Image src='/img/contacts-bg.png' alt='contacts' layout='fill' />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        <BtnLinks links={btnLinks} />
      </div>
    </div>
  </section>
);
