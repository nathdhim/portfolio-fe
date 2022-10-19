import Head from "next/head";
import {NavigationBar, NavigationCase} from "./Header";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";



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

function LayoutCase({showcase, children}) {

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
      <NavigationCase prev={`${showcase.id - 1 < 1 ? showcase.id + 4 : showcase.id - 1 }`} next={`${showcase.id + 1 > 5 ? showcase.id - 4 : showcase.id + 1 }`} key={showcase.id}/>
      <div className="scroll-wrapper" ref={scrollRef}>
        {children}
      </div>
    </div>
  );
};

function LayoutBlank(props) {

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
      <div className="scroll-wrapper" ref={scrollRef}>
        {props.children}
      </div>
    </div>
  );
};

export {Layout, LayoutCase, LayoutBlank};
