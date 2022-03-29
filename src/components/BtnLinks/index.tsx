import { LinkType } from "src/types";

type Props = {
  links: LinkType[];
};

export const BtnLinks: React.FC<Props> = ({ links }) => (
  <>
    {links.map((link, i) => (
      <a
        className='btn w-36'
        href={link.url}
        target='_blank'
        rel='noopener noreferrer nofollow'
        key={i}
      >
        <span>{link.label}</span>
      </a>
    ))}
  </>
);
