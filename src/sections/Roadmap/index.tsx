import Image from "next/image";
import { StarIcon } from "@/assets/svg";
import {
  roadmap1Image,
  roadmap2Image,
  roadmap3Image,
  roadmap4Image,
} from "@/assets/img";

export const Roadmap: React.FC = () => (
  <section
    id='roadmap'
    className='mx-6 xl:mx-auto pt-24 md:pt-40 pb-20 max-w-7xl'
  >
    <h2 className='font-bold text-2xl md:text-4xl px-6 md:px-0 mb-9 md:-mb-9'>
      UNFT Roadmap:
    </h2>

    <ul>
      <li className='flex justify-between'>
        <div className='hidden items-center w-full md:flex'>
          <Image
            src={roadmap1Image}
            alt='roadmap1'
            width={302}
            height={450}
            placeholder='blur'
          />
        </div>

        <div className='flex flex-col items-center'>
          <div className='mb-16'>
            <span className='block font-bold text-[#F8D47A] text-sm tracking-tighter whitespace-nowrap origin-left translate-x-1/2 rotate-90'>
              2022 Q1
            </span>
          </div>

          <div className='w-1 h-full rounded-t-sm bg-[#4A422E]/30 relative before:absolute before:top-0 before:right-0 before:left-0 before:h-28 before:bg-[#F8D47A] before:rounded-sm'></div>
        </div>

        <div className='w-full pl-0 md:pl-16 xl:pl-32 pb-20 mt-3 md:mt-0'>
          <div className='flex items-end mb-9'>
            <span className='font-bold text-5xl text-[#DADADA] tracking-tighter'>
              2022
            </span>
            <span className='font-bold text-lg text-[#A1A1A1] tracking-tighter ml-[2px]'>
              Q1
            </span>
          </div>

          <ul className='max-w-lg'>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon className='opacity-30' />
              </div>
              <span className='text-[#ABABAB] text-lg font-semibold leading-relaxed'>
                Smart contract development
              </span>
            </li>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon className='opacity-30' />
              </div>
              <span className='text-[#ABABAB] text-lg font-semibold leading-relaxed'>
                Launch of the first NFT collection
              </span>
            </li>
            <li className='mb-4'>
              <div className='flex mb-4'>
                <div className='p-1 mr-4 mb-auto'>
                  <StarIcon />
                </div>
                <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                  Mint
                </span>
              </div>
              <p className='text-sm text-[#ABABAB] max-w-[15rem] leading-loose ml-11'>
                Halt ERC20 Deposit/withdrawal Pause trading pairs on Probit
                Launch community swap from ERC-BSchain Open BSC deposit and
                withdrawal Re-launch trading pairs
              </p>
            </li>
          </ul>
        </div>
      </li>

      <li className='flex justify-between'>
        <div className='hidden mt-20 md:pl-16 xl:pl-32 items-center w-full order-first md:order-last md:flex'>
          <Image
            src={roadmap2Image}
            alt='roadmap2'
            width={302}
            height={450}
            placeholder='blur'
          />
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-1 h-48 mb-3 rounded-b-sm bg-[#4A422E]/30'></div>

          <div className='mb-16'>
            <span className='block font-bold text-[#F8D47A] text-sm tracking-tighter whitespace-nowrap origin-left translate-x-1/2 rotate-90'>
              2022 Q2
            </span>
          </div>

          <div className='w-1 h-full rounded-t-sm bg-[#4A422E]/30'></div>
        </div>

        <div className='w-full my-auto order-last pb-20 mt-36 md:mt-auto md:pb-0 md:order-first'>
          <div className='flex items-end mb-9'>
            <span className='font-bold text-5xl text-[#DADADA] tracking-tighter'>
              2022
            </span>
            <span className='font-bold text-lg text-[#A1A1A1] tracking-tighter ml-[2px]'>
              Q2
            </span>
          </div>

          <ul className='max-w-lg'>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Assistance to refugees
              </span>
            </li>
            {/* <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Organization of simple boarding schools for children
              </span>
            </li> */}
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Professional psychological assistance
              </span>
            </li>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
              Help for people affected by the war
              </span>
            </li>
          </ul>
        </div>
      </li>

      <li className='flex justify-between'>
        <div className='hidden mt-20 items-center w-full md:flex'>
          <Image
            src={roadmap3Image}
            alt='roadmap3'
            width={302}
            height={450}
            placeholder='blur'
          />
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-1 h-48 mb-3 rounded-b-sm bg-[#4A422E]/30'></div>

          <div className='mb-16'>
            <span className='block font-bold text-[#F8D47A] text-sm tracking-tighter whitespace-nowrap origin-left translate-x-1/2 rotate-90'>
              2022 Q3
            </span>
          </div>

          <div className='w-1 h-full rounded-t-sm bg-[#4A422E]/30'></div>
        </div>

        <div className='w-full my-auto pl-0 md:pl-16 pb-20 mt-36 md:mt-auto md:pb-0 xl:pl-32'>
          <div className='flex items-end mb-9'>
            <span className='font-bold text-5xl text-[#DADADA] tracking-tighter'>
              2022
            </span>
            <span className='font-bold text-lg text-[#A1A1A1] tracking-tighter ml-[2px]'>
              Q3
            </span>
          </div>

          <ul className='max-w-lg'>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Launch of the second NFT collection
              </span>
            </li>
          </ul>
        </div>
      </li>

      <li className='flex justify-between'>
        <div className='hidden mt-20 md:pl-16 xl:pl-32 items-center w-full order-first md:order-last md:flex'>
          <Image
            src={roadmap4Image}
            alt='roadmap4'
            width={302}
            height={450}
            placeholder='blur'
          />
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-1 h-48 mb-3 rounded-b-sm bg-[#4A422E]/30'></div>

          <div className='mb-16'>
            <span className='block font-bold text-[#F8D47A] text-sm tracking-tighter whitespace-nowrap origin-left translate-x-1/2 rotate-90'>
              2022 Q4
            </span>
          </div>

          <div className='w-1 h-full rounded-t-sm bg-[#4A422E]/30'></div>
        </div>

        <div className='w-full my-auto pb-20 mt-36 md:mt-auto md:pb-0 order-last md:order-first'>
          <div className='flex items-end mb-9'>
            <span className='font-bold text-5xl text-[#DADADA] tracking-tighter'>
              2022
            </span>
            <span className='font-bold text-lg text-[#A1A1A1] tracking-tighter ml-[2px]'>
              Q4
            </span>
          </div>

          <ul className='max-w-lg'>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Development of humanitarian assistance
              </span>
            </li>
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Medical consultations
              </span>
            </li>
            {/* <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Organization of training for adult migrants
              </span>
            </li> */}
            <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Full audit &amp; KYC to ensure security &amp; transparency
              </span>
            </li>
            {/* <li className='flex mb-4'>
              <div className='p-1 mr-4 mb-auto'>
                <StarIcon />
              </div>
              <span className='text-[#F6EDD4] text-lg font-semibold leading-relaxed'>
                Building a system of education in orphanages
              </span>
            </li> */}
          </ul>
        </div>
      </li>
    </ul>
  </section>
);
