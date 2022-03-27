import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import { RarityHero } from "@/sections/RarityHero";
import { ElementList } from "@/sections/ElementList";

const Rarity: NextPage = () => (
  <Layout>
    <Head>
      <title>UA NTF - Rarity</title>
      <meta
        name='description'
        content='Here you can get acquainted with the attributes of the collections'
      />
    </Head>

    <RarityHero />
    <ElementList />
  </Layout>
);

export default Rarity;
