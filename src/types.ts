export interface LinkType {
  url: string;
  label: string;
}

export interface Member {
  avatar: string; // url
  fullName: string;
  title: string;
  links: LinkType[];
}

export interface Question {
  question: string;
  answer: string | JSX.Element;
}
