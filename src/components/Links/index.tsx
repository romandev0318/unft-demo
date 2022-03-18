import { LinkType } from "types";
import { socialIcons } from "@/assets/svg";

type Props = {
  links: LinkType[];
};

export const Links: React.FC<Props> = ({ links }) => (
  <>
    {links.map((link, i) => (
      <a
        href={link.url}
        key={i}
        className='fill-[#EDEDED] hover:fill-[#F8D47A] transition ease-out delay-200'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        {socialIcons[link.label]}
        <span className='sr-only'>{link.label}</span>
      </a>
    ))}
  </>
);
