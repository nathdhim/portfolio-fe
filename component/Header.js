import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTransition, animated } from 'react-spring'

function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen,
    delay: 200,
    
    onRest: () => set(!isOpen),})

  let menu;
  if (isOpen) {
    menu = (
      <div className="menu-item-container">
        <Link href="/#">
          <a className="btn-link">Work</a>
        </Link>
        <Link href="/resource">
          <a className="btn-link">Resource</a>
        </Link>
        <Link href="/about">
          <a className="btn-link">About</a>
        </Link>
        <Link href="/contact">
          <a className="btn-link">Contact</a>
        </Link>
      </div>
    );
  }
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-container">
          <Link href="/#">
            <h2 className="logo">
              DP<span>©</span>{" "}
            </h2>
            </Link>
          </div>
          <div className="nav-item-container">
            <Link href="/#">
              <a className="btn-link">Work</a>
            </Link>
            <Link href="/resource">
              <a className="btn-link">Resource</a>
            </Link>
            <Link href="/about">
              <a className="btn-link">About</a>
            </Link>
          </div>
          <div className="contact-container">
            <Link href="/contact">
              <a className="btn-link">Contact</a>
            </Link>
          </div>
          <div className="toggle-menu">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#ffffff"
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
        {
          transitions(
            (styles, item) => item && <animated.div style={styles}>{menu}</animated.div>)
        }
        
      </nav>
    </>
  );
}

function NavigationCase() {
 
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <Link href="/#">
              <a className="btn-link">Back</a>
            </Link>
          </div>
          <div className="right-container">
          <Link href="/cases/case2">
              <a className="btn-link">Prev</a>
            </Link>
            <p className="desc">—</p>
            <Link href="/cases/case3">
              <a className="btn-link">Next</a>
            </Link>
          </div>
        </div>
        
        
      </nav>
    </>
  );
}

export {NavigationBar, NavigationCase};

