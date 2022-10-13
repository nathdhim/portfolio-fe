import "../styles/global.scss";
import { AnimatePresence, motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

function MyApp({ Component, pageProps, router }) {

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.asPath}>
        <motion.div
          className="pages-wrapper"
          initial={{ height: ["100%", "0%"] }}
          animate={{ height: ["100%", "0%"] }}
          transition={{
            ease: easeCustom,
            duration: 1,
            delay: 0.5,
          }}
          exit={{ height: ["0%", "100%"] }}
        ></motion.div>
        <Component {...pageProps} key={router.pathname} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
