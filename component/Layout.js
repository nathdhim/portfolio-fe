import Head from "next/head";
import { NavigationBar } from "./Header";
import { FooterDefault } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

function Layout(props, router) {
  return (
    <div className="main-container">
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: easeCustom,
          duration: 1,
        }}
      >
        {props.children}
        <FooterDefault />
      </motion.div>
    </div>
  );
}

function LayoutNoFooter(props, router) {
  return (
    <div className="main-container">
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: easeCustom,
          duration: 1,
        }}
      >
        {props.children}
       
      </motion.div>
    </div>
  );
}

export { Layout, LayoutNoFooter };
