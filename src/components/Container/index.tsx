type Props = {
  className: string;
};

export const Container: React.FC<Props> = ({ children, className }) => (
  <section
    className={`flex bg-black rounded-3xl border border-solid border-[#585858] ${className}`}
  >
    {children}
  </section>
);
