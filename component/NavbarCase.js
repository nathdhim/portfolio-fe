import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTransition, animated } from 'react-spring'

export default function NavigationCase() {
 
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