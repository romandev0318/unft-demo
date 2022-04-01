import { useToggle } from "@/hooks/useToggle";
import { Question } from "src/types";

export const AccordionItem: React.FC<Question & { opened?: boolean }> = ({
  question,
  answer,
  opened,
}) => {
  const [open, toggle] = useToggle(opened);

  return (
    <div
      className={`rounded-3xl cursor-pointer group border transition ease-in-out duration-200 overflow-hidden p-6 ${
        open ? "bg-[#F8D47A]/20 border-[#F8D47A]" : "bg-black border-[#ABABAB]"
      }`}
      onClick={toggle}
    >
      <div className='flex justify-between items-center'>
        <span
          className={`flex items-center text-lg md:text-2xl font-bold mr-4 ${
            open ? "text-[#F8D47A]" : "text-[#ABABAB]"
          }`}
        >
          {question}
        </span>

        <div id='accordion-toggler' className={open ? "open" : ""}></div>
      </div>

      <p className={`answer ${open ? "open" : ""}`}>{answer}</p>
    </div>
  );
};
