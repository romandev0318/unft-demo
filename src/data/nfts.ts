import { Element, elementTypeTitles } from "types";

export const showcase = [
  { url: "/img/showcase/showcase-1.png", title: "Hero Cat" },
  { url: "/img/showcase/showcase-2.png", title: "Hero Dog" },
  { url: "/img/showcase/showcase-3.png", title: "Hero Hot-Dog" },
  { url: "/img/showcase/showcase-4.png", title: "Ukranian Samurai" },
  { url: "/img/showcase/showcase-5.png", title: "Hawk" },
  { url: "/img/showcase/showcase-6.png", title: "Stealth backdor" },
  { url: "/img/showcase/showcase-7.png", title: "Hero Cat" },
  { url: "/img/showcase/showcase-8.png", title: "Warship" },
  { url: "/img/showcase/showcase-9.png", title: "Zelenskiy" },
  { url: "/img/showcase/showcase-10.png", title: "Forest" },
  { url: "/img/showcase/showcase-11.png", title: "Example 1" },
  { url: "/img/showcase/showcase-12.png", title: "Example 2" },
  { url: "/img/showcase/showcase-13.png", title: "Example 3" },
  { url: "/img/showcase/showcase-14.png", title: "Example 4" },
  { url: "/img/showcase/showcase-15.png", title: "Example 5" },
  { url: "/img/showcase/showcase-16.png", title: "Example 6" },
];

export const elementsByType: {
  [type in keyof typeof elementTypeTitles]: Element[];
} = {
  location: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Kiev.png",
      name: "Kiev",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Lighthouse-in-fire.png",
      name: "Lighthouse in fire",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Bomb-shelter.png",
      name: "Bomb shelter",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Destroyed-hospital.png",
      name: "Destroyed hospital",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Private-house.png",
      name: "Private house",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Scyscraper-in-fire.png",
      name: "Scyscraper in fire",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/Motherland.png",
      name: "Motherland",
      rarity: "Common",
    },
    {
      url: "/img/elements/location/War-chaos.png",
      name: "War-chaos",
      rarity: "Common",
    },
  ],
  clothes: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
  band: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
  beard: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
  accessoryFace: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
  accessoryBody: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
  headdress: [
    {
      url: "/img/elements/location/Administration.png",
      name: "Administration",
      rarity: "Common",
    },
  ],
};
