import { ArrowDropdownIcon } from "@/assets/svg";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { useToggle } from "@/utils/useToggle";

type Props = {
  className?: string;
  value: string | null;
  options: any[];
  onChange: (value: any) => () => void;
};

export const SelectMenu: React.FC<Props> = ({
  className,
  value,
  options,
  onChange,
}) => {
  const [open, toggle] = useToggle();

  return (
    <div className={`w-full sm:w-36 md:w-56 ${className}`}>
      <div
        className={`flex justify-between items-center pl-3 py-2 pr-2 rounded-xl border-2 border-[#353945] cursor-pointer transition ease-in-out delay-200 ${
          open ? "border-[#FAFAFB]" : ""
        }`}
        onClick={toggle}
      >
        <span className='font-medium text-sm leading-3'>
          {value ? camelCaseToTitleCase(value) : "All items"}
        </span>

        <div
          className={`flex items-center justify-center border-2 px-[9.5px] pt-[11.5px] pb-[11px] border-[#353945] rounded-full transition ease-in-out delay-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ArrowDropdownIcon />
        </div>
      </div>

      <div
        className={`absolute w-56 mt-2 p-2 rounded-xl bg-[#0A0B0F] border-2 border-[#353945] space-y-1 transition ease-in-out delay-200 z-10 ${
          open
            ? "pointer-events-auto opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      >
        {options.map((option, i) => (
          <div
            key={i}
            className={`option text-sm rounded-lg p-3 font-medium leading-5 w-full cursor-pointer transition ease-in-out delay-200 ${
              value === option ? "selected" : ""
            } ${option}`}
            onClick={onChange(option)}
          >
            {option ? camelCaseToTitleCase(option) : "All items"}
          </div>
        ))}
      </div>
    </div>
  );
};
