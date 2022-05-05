export interface LinkType {
  url: string;
  label: string;
}

export interface ShowcaseCardType {
  image: JSX.Element;
  title: string;
}

export interface Member {
  avatar: JSX.Element;
  fullName: string;
  title: string;
  links: LinkType[];
}

export interface Question {
  question: string;
  answer: string;
}

export const modalTypes = [
  "success",
  "connectionError",
  "networkSwitch",
  "error",
] as const;

export type ModalType = typeof modalTypes[number];
