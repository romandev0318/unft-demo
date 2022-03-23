import { TeamMember } from "@/components/TeamMember";
import { team } from "@/data/team";

export const Team: React.FC = () => (
  <section className='mx-auto my-40 max-w-7xl'>
    <h4 className='font-bold text-4xl mb-3'>Our Team</h4>
    <p className='text-base text-[#ABABAB] font-normal mb-16'>
      Ordinary people who love their country
    </p>

    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10'>
      {team.map((member, i) => (
        <TeamMember key={i} member={member} />
      ))}
    </div>
  </section>
);
