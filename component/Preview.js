import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/future/image";
const easeCustom = [0.8, 0, 0.28, 1];

function Preview() {
  return (
    <AnimatePresence>
      <div className="overlay-wrapper"></div>
      <div className="preview-container row">
      
      </div>
    </AnimatePresence>
  );
}

export default Preview;
