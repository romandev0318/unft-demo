type Props = {
  id?: string;
  className?: string;
};

export const Container: React.FC<Props> = ({ id, children, className }) => (
  <section id={id || ""} className='pt-40 pb-20'>
    <div
      className={`flex bg-black rounded-3xl border border-solid border-[#585858] ${className}`}
    >
      {children}
    </div>
  </section>
);
