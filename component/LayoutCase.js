import Head from "next/head";
import NavigationCase from "./NavbarCase";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const LayoutCase = (props) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const _scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.025
      });
     
      
    });
  }, []);
 

  return (
    <div className="container">
      
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationCase />
      <div className="scroll-wrapper" ref={scrollRef} >
        {props.children}
      </div>
    </div>
  );
};
export default LayoutCase;
