import "../styles/global.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const easeCustom = [0.8, 0, 0.28, 1];

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <AnimatePresence mode="wait" key={router.asPath}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    // <AnimatePresence exitBeforeEnter>
    // <motion.div key={router.pathname}>
    //   {/* <motion.div
    //     className="pages-wrapper"
    //     initial={{ height: ["100%", "0%"] }}
    //     animate={{ height: ["100%", "0%"] }}
    //     transition={{
    //       ease: easeCustom,
    //       duration: 1,
    //       delay: 0.5,
    //     }}
    //     exit={{ height: ["0%", "100%"] }}
    //   ></motion.div> */}
    //   <Component {...pageProps} key={router.pathname} />
    // </motion.div>
    // </AnimatePresence>
  );
}

export default MyApp;
