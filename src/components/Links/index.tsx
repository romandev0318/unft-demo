import { LinkType } from "types";
import { socialIcons } from "@/assets/svg";

type Props = {
  links: LinkType[];
  className?: string;
};

export const Links: React.FC<Props> = ({ links, className }) => (
  <>
    {links.map((link, i) => (
      <a
        href={link.url}
        key={i}
        className={`fill-[#EDEDED] hover:fill-[#F8D47A] hover:opacity-100 transition ease-out delay-200 ${
          className || ""
        }`}
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        {socialIcons[link.label]}
        <span className='sr-only'>{link.label}</span>
      </a>
    ))}
  </>
);
