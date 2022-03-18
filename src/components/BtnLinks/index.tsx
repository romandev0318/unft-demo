import { LinkType } from "types";

type Props = {
  links: LinkType[];
};

export const BtnLinks: React.FC<Props> = ({ links }) => (
  <>
    {links.map((link, i) => (
      <a href={link.url} key={i}>
        {link.label}
      </a>
    ))}
  </>
);
