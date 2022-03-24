type Props = {
  id?: string;
  className?: string;
};

export const Container: React.FC<Props> = ({ id, children, className }) => (
  <section id={id || ""} className='pt-24 pb-20 md:pt-40'>
    <div
      className={`flex flex-col xl:flex-row items-center relative py-9 md:py-24 2xl:max-w-screen-2xl 2xl:mx-auto mx-6 md:mx-8 bg-black rounded-3xl border border-solid border-[#585858] overflow-hidden ${className}`}
    >
      {children}
    </div>
  </section>
);
