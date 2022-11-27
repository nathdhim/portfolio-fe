import Head from "next/head";
import { Navbar } from "./Header";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const easeCustom = [0.8, 0, 0.28, 1];

function Layout(props) {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        lerp: 0.05,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <div className="main-container" id="container">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />

      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: easeCustom,
          duration: 1.5,
        }}
        data-scroll-container
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export { Layout };
