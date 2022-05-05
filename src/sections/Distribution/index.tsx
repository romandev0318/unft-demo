import Image from "next/image";
import { Container } from "@/components/Container";
import { DistributionItem } from "@/components/DistributionItem";

export const Distribution: React.FC = () => (
  <Container className='flex flex-col xl:flex-col 2xl:flex-col items-center relative 2xl:max-w-screen-2xl 2xl:mx-auto py-24 px-8 lg:px-36 mx-8 overflow-hidden'>
    <h3 className='block w-full text-center lg:text-left text-4xl font-bold tracking-tight mb-24 z-[1]'>
      Distribution of funds
    </h3>

    <div className='flex gap-32 flex-col xl:flex-row'>
      <ul className='md:w-[525px] space-y-4'>
        <DistributionItem label='Army' color='purple' cut={20} />
        <DistributionItem label='Technique' color='lightBlue' cut={25} />
        <DistributionItem label='Settlers' color='yellow' cut={10} />
        <DistributionItem label='Medicines' color='orange' cut={15} />
        <DistributionItem label='Help for families' color='brown' cut={10} />
      </ul>

      <div className='absolute top-0 right-0 max-w-full'>
        <Image
          src='/img/distribution-bg.png'
          alt='chart'
          width={719 * 0.9}
          height={573 * 0.9}
        />
      </div>

      <div>
        <Image src='/img/chart.png' alt='chart' width={558} height={558} />
      </div>
    </div>
  </Container>
);
