import "tailwindcss/tailwind.css";
import "../styles.css";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Loader />}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    </>
  );
}

export default MyApp;
