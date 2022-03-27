import ElementsImages from "@/assets/elements";
import Image from "next/image";
import { Element, ElementType } from "src/types";

export const elementsByType: {
  [type in ElementType]: Element[];
} = {
  location: [
    {
      image: (
        <Image
          src={ElementsImages.Administration}
          alt='Administration'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Administration",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.Kiev}
          alt='Kiev'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Kiev",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.LighthouseInFire}
          alt='Lighthouse in fire'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Lighthouse in fire",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.BombShelter}
          alt='Bomb shelter'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Bomb shelter",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.DestroyedHospital}
          alt='Destroyed hospital'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Destroyed hospital",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.PrivateHouse}
          alt='Private house'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Private house",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.ScyscraperInFire}
          alt='Scyscraper in fire'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Scyscraper in fire",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.Motherland}
          alt='Motherland'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Motherland",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.WarChaos}
          alt='War-chaos'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "War-chaos",
      rarity: "common",
    },
  ],
  clothes: [
    {
      image: (
        <Image
          src={ElementsImages.GreenMedicalTShirt}
          alt='green medical t-shirt'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Green medical t-shirt",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilSportJacket}
          alt='Civil sport jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil sport jacket",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.TacticalJacket}
          alt='Tactical jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Tactical jacket",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.HardMilitaryJacket}
          alt='Hard military jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Hard military jacket",
      rarity: "legendary",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilRedVest}
          alt='Civil red vest'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil red vest",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.blueMedicalSweater}
          alt='blue medical sweater'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Blue medical sweater",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilJacket}
          alt='Civil jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil jacket",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilCardigan}
          alt='Civil cardigan'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil cardigan",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.RescuerJacket}
          alt='Rescuer jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Rescuer jacket",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.PoliceJacket}
          alt='Police jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Police jacket",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.BlueMedicalTShirt}
          alt='blue medical t-shirt'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Blue medical t-shirt",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilSweater}
          alt='Civil sweater'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil sweater",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.MilitaryJacket}
          alt='Military jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Millitary jacket",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.OfficerGreenJacket}
          alt='Officer green jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Officer green jacket",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.GreenMedicalSweater}
          alt='green medical sweater'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Green medical sweater",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.CivilOrangeVest}
          alt='Civil orange vest'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Civil orange vest",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.OffecerBlueJacket}
          alt='Offecer blue jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Offecer blue jacket",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.PilotJacket}
          alt='Pilot jacket'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Pilot jacket",
      rarity: "legendary",
    },
  ],
  band: [
    {
      image: (
        <Image
          src={ElementsImages.BlueBand}
          alt='BlueBand'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Blue Band",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.WoundBand}
          alt='WoundBand'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Wound Band",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.YellowBand}
          alt='YellowBand'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Yellow Band",
      rarity: "epic",
    },
  ],
  beard: [
    {
      image: (
        <Image
          src={ElementsImages.Unshaved}
          alt='Unshaved'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Unshaved",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.Moustache}
          alt='Moustache'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Moustache",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.Beard}
          alt='Beard'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Beard",
      rarity: "epic",
    },
  ],
  accessoryFace: [
    {
      image: (
        <Image
          src={ElementsImages.RightBandage}
          alt='RightBandage'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Right Bandage",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.LeftBloodyBandage}
          alt='LeftBloodyBandage'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Left Bloody Bandage",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.MedicalMask}
          alt='MedicalMask'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Medical Mask",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.DirtyMedicalMask}
          alt='DirtyMedicalMask'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Dirty Medical Mask",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.RightBloodyBandage}
          alt='RightBloodyBandage'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Right Bloody Bandage",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.LeftBandage}
          alt='LeftBandage'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Left Bandage",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.BlackGoldenGlasses}
          alt='BlackGoldenGlasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Black Golden Glasses",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.GreenGlasses}
          alt='GreenGlasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Green Glasses",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.BlackGlasses}
          alt='BlackGlasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Black Glasses",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.GoldenGlasses}
          alt='GoldenGlasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Golden Glasses",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.OrrangeGlasses}
          alt='OrrangeGlasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Orrange Glasses",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.Glasses}
          alt='Glasses'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Glasses",
      rarity: "common",
    },
  ],
  accessoryBody: [
    {
      image: (
        <Image
          src={ElementsImages.BulletproofVest}
          alt='BulletproofVest'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Bulletproof Vest",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.TechnicalVest}
          alt='TechnicalVest'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Technical Vest",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.Belt2}
          alt='Belt2'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Belt 2",
      rarity: "legendary",
    },
    {
      image: (
        <Image
          src={ElementsImages.Belt1}
          alt='Belt1'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Belt 1",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.BulletproofVestBlack}
          alt='BulletproofVestBlack'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Bulletproof Vest Black",
      rarity: "epic",
    },
  ],
  headdress: [
    {
      image: (
        <Image
          src={ElementsImages.HeaddressMedicBlue}
          alt='HeaddressMedicBlue'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Headdress Medic Blue",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.PilotHelmet}
          alt='PilotHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Pilot Helmet",
      rarity: "legendary",
    },
    {
      image: (
        <Image
          src={ElementsImages.Hat}
          alt='Hat'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Hat",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.NightVisionCamouflageHelmet}
          alt='NightVisionCamouflageHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Night Vision Camouflage Helmet",
      rarity: "legendary",
    },
    {
      image: (
        <Image
          src={ElementsImages.OfficerBlueCap}
          alt='OfficerBlueCap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Officer Blue Cap",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.TankHelmet}
          alt='TankHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Tank Helmet",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.LifeguardHelmet}
          alt='LifeguardHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Lifeguard Helmet",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.PoliceCap}
          alt='PoliceCap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Police Cap",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.PoliceHelmet}
          alt='PoliceHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Police Helmet",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.TurquoiseBeretHat}
          alt='TurquoiseBeretHat'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Turquoise Beret Hat",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.OfficerGreenCap}
          alt='OfficerGreenCap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Officer Green Cap",
      rarity: "epic",
    },
    {
      image: (
        <Image
          src={ElementsImages.GreenBeretHat}
          alt='GreenBeretHat'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Green Beret Hat",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.MilitaryCap}
          alt='MilitaryCap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Millitary Cap",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.HeaddressMedicGreen}
          alt='HeaddressMedicGreen'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Headdress Medic Green",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.Cap}
          alt='Cap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Cap",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.HairCapMedicGreen}
          alt='HairCapMedicGreen'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Hair Cap Medic Green",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.Helmet}
          alt='Helmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Helmet",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.CamouflageHelmet}
          alt='CamouflageHelmet'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Camouflage Helmet",
      rarity: "superRare",
    },
    {
      image: (
        <Image
          src={ElementsImages.RedBeretHat}
          alt='RedBeretHat'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Red Beret Hat",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.TacticalCap}
          alt='TacticalCap'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Tactical Cap",
      rarity: "rare",
    },
    {
      image: (
        <Image
          src={ElementsImages.HairCapMedicBlue}
          alt='HairCapMedicBlue'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Hair Cap Medic Blue",
      rarity: "common",
    },
    {
      image: (
        <Image
          src={ElementsImages.BlueBeretHat}
          alt='BlueBeretHat'
          objectFit='cover'
          layout='fill'
          placeholder='blur'
          quality={20}
        />
      ),
      name: "Blue Beret Hat",
      rarity: "rare",
    },
  ],
};
