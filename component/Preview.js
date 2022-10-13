import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/future/image";
const easeCustom = [0.75, -0.01, 0.34, 1];

function Preview() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="overlay-wrapper"></div>
      <div className="content-container row">
      
      </div>
    </AnimatePresence>
  );
}

export default Preview;
