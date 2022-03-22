import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { questions } from "@/data/questions";

export const FAQ: React.FC = () => (
  <section className='mx-auto my-40 max-w-7xl'>
    <h4 className='font-bold text-4xl mb-3'>Frequently asked question</h4>
    <p className='text-base text-[#ABABAB] font-normal mb-16'>
      Quickly find answers to common questions
    </p>

    <div className='flex'>
      <div className='w-[747px] space-y-12 mr-9'>
        <Accordion questions={questions} />
      </div>

      <div>
        <Image src='/img/FAQ.png' alt='faq' width={607} height={778} />
      </div>
    </div>
  </section>
);
