import { Member } from "types";
import { Links } from "@/components/Links";

type Props = {
  member: Member;
};

export const TeamMember: React.FC<Props> = ({ member }) => (
  <div className='flex flex-col max-w-sm w-full mb-auto'>
    <div className='relative h-48 sm:h-96 mb-5 w-auto'>{member.avatar}</div>

    <span className='block font-bold text-2xl tracking-tight mb-2'>
      {member.fullName}
    </span>
    <p className='font-normal text-sm text-[#ABABAB] mb-5'>{member.title}</p>

    <div className='flex items-center space-x-5'>
      <Links links={member.links} className='fill-[#ABABAB]' />
    </div>
  </div>
);
