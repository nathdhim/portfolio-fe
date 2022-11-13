import Head from "next/head";
import { AnimateNavbar, Navbar } from "./Header";
import { FooterDefault } from "./Footer";
import { AnimatePresence, motion } from "framer-motion";


const easeCustom = [0.8, 0, 0.28, 1];

function AnimateLayout(props) {
  return (
    <div className="main-container" id="container">
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <AnimateNavbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: easeCustom,
          duration: 1.5,
        }}
      >
        {props.children}
        <FooterDefault />
      </motion.div>
      
    </div>
  );
}

function Layout(props) {
  return (
    <div className="main-container" >
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: easeCustom,
          duration: 1.5,
          
        }}
      >
        {props.children}
        <FooterDefault />
      </motion.div>
    </div>
  );
}

function LayoutNoFooter(props) {
  return (
    <div className="main-container">
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <Navbar />

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

export {AnimateLayout, Layout, LayoutNoFooter };
