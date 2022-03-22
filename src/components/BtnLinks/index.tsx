import { LinkType } from "types";

type Props = {
  links: LinkType[];
};

export const BtnLinks: React.FC<Props> = ({ links }) => (
  <>
    {links.map((link, i) => (
      <a className='btn w-36 mb-6' href={link.url} key={i}>
        <span>{link.label}</span>
      </a>
    ))}
  </>
);
