export interface LinkType {
  url: string;
  label: string;
}

export interface ShowcaseCardType {
  image: JSX.Element;
  title: string;
}

export const rarities = [
  "common",
  "rare",
  "superRare",
  "epic",
  "legendary",
] as const;

export type RarityType = typeof rarities[number];

export type ElementType =
  | "location"
  | "clothes"
  | "band"
  | "beard"
  | "accessoryFace"
  | "accessoryBody"
  | "headdress";

export interface Element {
  image: JSX.Element;
  name: string;
  rarity: RarityType;
}

export interface Member {
  avatar: JSX.Element;
  fullName: string;
  title: string;
  links: LinkType[];
}

export interface Question {
  question: string;
  answer: string | JSX.Element;
}
