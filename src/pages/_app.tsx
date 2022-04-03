import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import fetchAPI from "@/utils/fetchAPI";

import "@/styles/index.css";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.utm_source) return;

    const utmSource = router.query.utm_source.toString();

    (async () => {
      const { res, error } = await fetchAPI("/counter/" + utmSource, {
        method: "post",
        auth: true,
      });

      if (!error)
        console.log(
          res?.message || `Counter ${utmSource} was successfully created`
        );
    })();

    localStorage.setItem("utm_source", utmSource);

    router.replace(router.pathname, undefined, { shallow: true });
  }, [router]);

  return <Component {...pageProps} />;
};

export default App;
