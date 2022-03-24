import Image from "next/image";
import { BtnLinks } from "@/components/BtnLinks";
import { btnLinks } from "@/data/links";

export const Contacts: React.FC = () => (
  <section className='text-center'>
    <strong className='block mb-4 md:mb-8 text-3xl sm:text-4xl leading-10 font-bold'>
      Got a question <br className='block sm:hidden' /> or proposal?
    </strong>
    <p className='flex flex-col md:block text-[#ABABAB] text-[14px] mb-16'>
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
