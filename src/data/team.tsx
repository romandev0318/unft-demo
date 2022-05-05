import Image from "next/image";
import TeamImages from "@/assets/team";
import { Member } from "src/types";

export const team: Member[] = [
  {
    avatar: (
      <Image
        src={TeamImages.JohnMevisImage}
        alt='JohnMevis'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "John Mevis",
    title: "UI / UX Designer",
    links: [
      {
        url: "https://www.instagram.com/john.mevis/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.DanielChermanImage}
        alt='DanielCherman'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Daniel Cherman",
    title: "Head of Development & Integration",
    links: [
      {
        url: "https://instagram.com/cherman.daniel?utm_medium=copy_link",
        label: "instagram",
      },
    ],
  },
];
