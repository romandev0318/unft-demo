import { useState } from "react";
import { Question } from "types";

export const AccordionItem: React.FC<Question & { opened?: boolean }> = ({
  question,
  answer,
  opened,
}) => {
  const [open, setOpen] = useState(opened);

  const toggleOpen = () => setOpen((state) => !state);

  return (
    <div
      className={`rounded-3xl cursor-pointer group border transition ease-in-out duration-200 overflow-hidden p-6 ${
        open ? "bg-[#F8D47A]/20 border-[#F8D47A]" : "bg-black border-[#ABABAB]"
      }`}
      onClick={toggleOpen}
    >
      <div className='flex justify-between items-center'>
        <span
          className={`flex items-center text-2xl font-bold ${
            open ? "text-[#F8D47A]" : "text-[#ABABAB]"
          }`}
        >
          {question}
        </span>

        <div id='accordion-toggler' className={open ? "open" : ""}></div>
      </div>

      <p className={`answer  ${open ? "open" : ""}`}>{answer}</p>
    </div>
  );
};
