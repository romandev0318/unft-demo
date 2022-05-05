import Image from "next/image";
import ShowcaseImages from "@/assets/showcase";
import { ShowcaseCardType } from "src/types";

export const showcase: ShowcaseCardType[] = [
  {
    image: (
      <Image
        src={ShowcaseImages.showcase1Image}
        alt='UA-NFT #1'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #1",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase2Image}
        alt='UA-NFT #2'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #2",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase3Image}
        alt='UA-NFT #3'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #3",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase4Image}
        alt='UA-NFT #4'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #4",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase5Image}
        alt='UA-NFT #5'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #5",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase6Image}
        alt='UA-NFT #6'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #6",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase7Image}
        alt='UA-NFT #7'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #8",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase8Image}
        alt='UA-NFT #8'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #8",
  },
  {
    image: (
      <Image
        src={ShowcaseImages.showcase9Image}
        alt='UA-NFT #9'
        className='object-cover'
        layout='fill'
        quality={30}
        placeholder='blur'
      />
    ),
    title: "UA-NFT #9",
  },
];
