import Head from "next/head";
import {NavigationBar, NavigationCase} from "./Header";
import { useEffect, useRef, useState } from "react";




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
            lerp: 0.03
        });
    });

    // `useEffect`'s cleanup phase
    return () => {
        if (scroll) scroll.destroy();
    }
});

  return (
    <div className="container">
      
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationBar />
      <div className="scroll-wrapper" ref={scrollRef}>
        {props.children}
      </div>
    </div>
  );
};

function LayoutCase(props) {

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
            lerp: 0.03
        });
    });

    // `useEffect`'s cleanup phase
    return () => {
        if (scroll) scroll.destroy();
    }
});

  return (
    <div className="container">
      
      <Head>
        <title>Dhimas Putra | Expert Product Designer</title>
      </Head>
      <NavigationCase />
      <div className="scroll-wrapper" ref={scrollRef}>
        {props.children}
      </div>
    </div>
  );
};

export {Layout, LayoutCase};
