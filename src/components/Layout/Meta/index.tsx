import Head from "next/head";

export const Meta: React.FC = () => (
  <Head>
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://ua-nft.io' />
    {/* <meta property='og:image' content='/img/unft-thumbnail.webp' /> */}
    <meta
      property='og:title'
      content='Ukrainian NFT Collection of the heroes of the war'
    />
    <meta
      property='og:description'
      content='Anyone can support Ukraine at this extremely difficult time'
    />
    <meta property='og:site_name' content='UA NFT' />
    <meta property='twitter:card' content='summary' />
    <meta property='twitter:site' content='@UA__NFT' />
    {/* <meta property='twitter:image' content='/img/unft-thumbnail.webp' /> */}
    <meta
      property='twitter:title'
      content='Ukrainian NFT Collection of the heroes of the war'
    />
    <meta
      property='twitter:description'
      content='Anyone can support Ukraine at this extremely difficult time'
    />
    <meta
      name='description'
      content='Anyone can support Ukraine at this extremely difficult time'
    />
    <meta name='keywords' content='support ukraine' />

    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/favicon/favicon-16x16.png'
    />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link
      rel='mask-icon'
      href='/favicon/safari-pinned-tab.svg'
      color='#f8d47a'
    />
    <link rel='shortcut icon' href='/favicon/favicon.ico' />
    <meta name='apple-mobile-web-app-title' content='UA NFT' />
    <meta name='application-name' content='UA NFT' />
    <meta name='msapplication-TileColor' content='#f8d47a' />
    <meta name='theme-color' content='#f8d47a'></meta>
  </Head>
);
