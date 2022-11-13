import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTransition, animated } from "react-spring";
import { BtnLink } from "./Button";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function AnimateNavbar() {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const textOutput = ["#F8F8F8", "#0a0a0a"];
  const { scrollYProgress } = useViewportScroll();
  const color = useTransform(scrollYProgress, [0, 0.02], textOutput);

  return (
    <>
      <nav>
        <motion.div className="nav-container row sb align-center">
          <div className="logo-container row">
            <Link href="/#">
              <a>
                <motion.h2 className="logo" style={{ color }}>
                  HD<motion.span style={{ color }}>©</motion.span>
                </motion.h2>
              </a>
            </Link>
          </div>
          <div className="nav-item-container row gap-32">
            <BtnLink
              to="/#"
              label="Work"
              addClass={`${isSticky ? null : "btn-link-white"} `}
            />
            {/* <BtnLink to="/#" label="Resource" /> */}
            <BtnLink
              to="/contact"
              label="Contact"
              addClass={`${isSticky ? null : "btn-link-white"} `}
            />
          </div>
        </motion.div>
      </nav>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container row sb align-center">
          <div className="logo-container row">
            <Link href="/#">
              <a>
                <motion.h2 className="logo">
                  HD<motion.span>©</motion.span>
                </motion.h2>
              </a>
            </Link>
          </div>
          <div className="nav-item-container row gap-32">
            <BtnLink to="/#" label="Work" />
            {/* <BtnLink to="/#" label="Resource" /> */}
            <BtnLink to="/contact" label="Contact" />
          </div>
        </div>
      </nav>
    </>
  );
}

export { AnimateNavbar, Navbar };
