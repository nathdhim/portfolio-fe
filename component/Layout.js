import Head from "next/head";
import NavigationBar from "./Navbar";
import { useEffect, useRef, useState } from "react";

const Layout = (props) => {

  const scrollRef = useRef();
  
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true
      });
    });

   
  }, []);

  return (
    <div className="container" ref={scrollRef}>
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationBar />
      <div className="scroll-wrapper" data-scroll-section>
        {props.children}
      </div>
    </div>
  );
}
export default Layout;
