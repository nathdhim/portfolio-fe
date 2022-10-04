import Head from "next/head";
import NavigationBar from "./Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useRef } from "react";

export default function Layout(props) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
 
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      
        <div className="container" data-scroll-section>
          <Head>
            <title>Dhimas Putra | Expert Product Designer</title>
          </Head>
          <NavigationBar />
          <div
            className="scroll-wrapper"
            data-scroll-container
            ref={containerRef}
          >
            {props.children}
          </div>
        </div>
      
    </LocomotiveScrollProvider>
  );
}
