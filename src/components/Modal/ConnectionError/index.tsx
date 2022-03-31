import { MetamaskIcon } from "@/assets/svg";

export const ConnectionError: React.FC = () => (
  <div className='flex flex-col space-y-8 md:space-y-12 px-4 md:px-10'>
    <strong className='text-lg md:text-2xl lg:text-3xl'>
      It looks like you don&apos;t have MetaMask installed
    </strong>
    <a
      href='https://metamask.io/download/'
      className='btn text-base md:text-xl flex items-center space-x-3 px-8 w-auto mx-auto'
      target='_blank'
      rel='noopener noreferrer nofollow'
    >
      <span>Download MetaMask</span>

      <MetamaskIcon className='w-4 h-4 md:w-7 md:h-7' />
    </a>

    <span className='text-[#ABABAB] text-sm sm:text-base font-normal'>
      Minting on mobile? <br />
      <a
        href='https://metamask.io/download/'
        target='_blank'
        rel='noopener noreferrer nofollow'
        className='underline'
      >
        Press here to mint on the MetaMask app instead
      </a>
    </span>
  </div>
);
