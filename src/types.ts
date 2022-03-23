export interface LinkType {
  url: string;
  label: string;
}

export interface ShowcaseCardType {
  url: string;
  title: string;
}

export type RarityType =
  | "Common"
  | "Rare"
  | "Super Rare"
  | "Epic"
  | "Legendary";

export const elementTypeTitles = {
  location: "Location",
  clothes: "Clothes",
  band: "Band",
  beard: "Beard",
  accessoryFace: "Accessory Face",
  accessoryBody: "Accessory Body",
  headdress: "Headdress",
};

export interface Element {
  url: string;
  name: string;
  rarity: RarityType;
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
