type Props = {
  message: string;
  tx: string;
};

export const SuccessModal: React.FC<Props> = ({ message, tx }) => (
  <div className='flex flex-col space-y-8 md:space-y-12 px-4 md:px-10'>
    <strong className='text-lg md:text-2xl lg:text-3xl'>{message}</strong>
    <a
      href={tx}
      className='btn px-8 w-auto mx-auto'
      target='_blank'
      rel='noopener noreferrer nofollow'
    >
      <span>See transaction</span>
    </a>
  </div>
);
