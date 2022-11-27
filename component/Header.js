import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTransition, animated } from "react-spring";
import { BtnLink } from "./Button";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/future/image";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container row sb align-center">
          <div className="logo-container row">
            <Link href="/#">
              <a>
                <Image src="/img/logo.svg" width={56.1} alt="logo" height={24}/>
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

export { Navbar };
