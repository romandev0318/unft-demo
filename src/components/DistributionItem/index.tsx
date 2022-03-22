type Props = {
  label: string;
  color: keyof typeof colors;
  cut: number;
};

const beforeW = (value: number) => `before:w-[${value}%]`;

const colors = {
  purple: {
    bg: "bg-[#21284D]/30",
    progress: "bg-[#3383E0]",
    text: "text-[#3383E0]",
  },
  lightBlue: {
    bg: "bg-[#082835]/30",
    progress: "bg-[#26A3D9]",
    text: "text-[#26A3D9]",
  },
  yellow: {
    bg: "bg-[#FAC46D]/20",
    progress: "bg-[#FAC46D]",
    text: "text-[#FAC46D]",
  },
  orange: {
    bg: "bg-[#F3B95E]/20",
    progress: "bg-[#F3B95E]",
    text: "text-[#F3B95E]",
  },
  brown: {
    bg: "bg-[#B57817]/20",
    progress: "bg-[#B57817]",
    text: "text-[#B57817]",
  },
};

export const DistributionItem: React.FC<Props> = ({ label, color, cut }) => (
  <li className='flex relative justify-between rounded-2xl distribution-item-border px-8 py-9'>
    <span className='text-lg text-[#ABABAB] font-bold tracking-tighter z-10'>
      {label}
    </span>
    <div className='flex items-center space-x-3 ml-4 z-10'>
      <div className={`w-24 h-5 relative rounded-lg ${colors[color].bg}`}>
        <div
          className={`h-full rounded-lg ${colors[color].progress}`}
          style={{ width: `${cut}%` }}
        ></div>
      </div>
      <span className={`font-bold text-sm ${colors[color].text} whitespace-nowrap z-10`}>
        {cut} %
      </span>
    </div>
  </li>
);
