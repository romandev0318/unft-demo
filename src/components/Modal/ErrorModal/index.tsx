type Props = {
  message?: string;
  closeModal: () => void;
};

export const ErrorModal: React.FC<Props> = ({ message, closeModal }) => (
  <div className='flex flex-col space-y-8 md:space-y-12 px-4 md:px-10'>
    <strong className='text-lg md:text-2xl lg:text-3xl'>{message}</strong>
    <button
      className='btn px-8 w-auto mx-auto'
      type='button'
      onClick={closeModal}
    >
      <span>Close</span>
    </button>
  </div>
);
