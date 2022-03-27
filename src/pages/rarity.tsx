import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { RarityHero } from "@/sections/RarityHero";
import { ElementList } from "@/sections/ElementList";

const Rarity: NextPage = () => (
  <Layout>
    <RarityHero />
    <ElementList />
  </Layout>
);

export default Rarity;
