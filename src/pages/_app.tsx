import type { AppProps } from "next/app";
import { polyfill } from "smoothscroll-polyfill";

import "@/styles/index.css";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    polyfill();
  }, []);

  return <Component {...pageProps} />;
};

export default App;
