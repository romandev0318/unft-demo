import { Mint } from "@/components/Mint";

export const Hero: React.FC = () => (
  <section className='pt-40'>
    <h1>
      <span>Ukrainian NFT Collection</span>
      <br />
      of heroes this war
    </h1>
    <p>Anyone can support ukraine in this extremely difficult time.</p>

    <Mint />

    <p>
      100% funds will be transferred to support the Ukrainian militaryand the
      victims of this war.
    </p>
  </section>
);
