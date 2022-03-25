import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { questions } from "@/data/questions";
import { FAQImage } from "@/assets/img";

export const FAQ: React.FC = () => (
  <section className='mx-6 2xl:mx-auto mt-20 md:mt-40 mb-40 max-w-7xl'>
    <h4 className='font-bold text-4xl mb-3'>Frequently asked question</h4>
    <p className='text-base text-[#ABABAB] font-normal mb-16'>
      Quickly find answers to common questions
    </p>

    <div className='flex flex-col items-center space-y-16 lg:flex-row lg:space-y-0 lg:items-start'>
      <div className='w-full lg:w-[747px] space-y-4 md:space-y-8 mr-0 lg:mr-9'>
        <Accordion questions={questions} />
      </div>

      <div>
        <Image src={FAQImage} alt='faq' placeholder='blur' />
      </div>
    </div>
  </section>
);
