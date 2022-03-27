import { TeamMember } from "@/components/TeamMember";
import { team } from "@/data/team";

export const Team: React.FC = () => (
  <section className='mx-6 2xl:mx-auto pt-24 md:pt-40 pb-20 max-w-7xl'>
    <h3 className='font-bold text-4xl px-6 sm:px-0 mb-3'>Our Team</h3>
    <p className='text-base text-[#ABABAB] font-normal px-6 sm:px-0 mb-16'>
      Ordinary people who love their country
    </p>

    <div className='grid place-items-center grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 lg:gap-x-16 lg:gap-y-10'>
      {team.map((member, i) => (
        <TeamMember key={i} member={member} />
      ))}
    </div>
  </section>
);
