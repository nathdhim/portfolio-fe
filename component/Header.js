import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTransition, animated } from "react-spring";
import { BtnLink } from "./Button";

function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen,
    delay: 200,

    onRest: () => set(!isOpen),
  });

  let menu;
  if (isOpen) {
    menu = (
      <div className="menu-item-container">
        <BtnLink to="/#" label="Home" />
        {/* <BtnLink to="/#" label="Resource" /> */}
        <BtnLink to="/contact" label="Contact" />
      </div>
    );
  }

  
  return (
    <>
      <nav>
        <div className="nav-container row sb align-center">
          <div className="logo-container row">
            <Link href="/#" >
             <a>
             <h2 className="logo">
                HD<span >©</span>
              </h2>
             </a>
            </Link>
          </div>
          <div className="nav-item-container row gap-32">
            <BtnLink to="/#" label="Home" />
            {/* <BtnLink to="/#" label="Resource" /> */}
            <BtnLink to="/contact" label="Contact" />
          </div>
          <div className="toggle-menu">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#281E09"
              size={24}
              onToggle={(toggled) => {
                if (toggled) {
                  //open a menu
                } else {
                  // close a menu
                }
              }}
            />
          </div>
        </div>
        {transitions(
          (styles, item) =>
            item && <animated.div style={styles}>{menu}</animated.div>
        )}
      </nav>
    </>
  );
}


export { NavigationBar };
