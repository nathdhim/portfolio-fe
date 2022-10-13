import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/future/image";
const easeCustom = [0.75, -0.01, 0.34, 1];

function Preview() {

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="overlay-wrapper"
      ></motion.div>
      <motion.div
        className="content-container row"
        
      >
        <div className="product-desc column">
          <div className="product-title column">
            <h1>Dynamic Island Prototype</h1>
            <p>
              Nam repudiandae voluptate aliquid nihil reiciendis et laborum quo.
              Enim quod et aut aliquid possimus dolorum ipsam itaque. Sunt ut
              quia. In mollitia et modi pariatur animi expedita neque
              laboriosam. Dolores qui eum aspernatur cum in voluptatem. Ipsam
              eaque neque dolores culpa ratione maiores voluptatum.
            </p>
          </div>
          <a href="#" className="btn-primary">
            Download
            <Image src="/icon/download.svg" width={20} height={20} />
          </a>
        </div>
        <div className="product-img column">
          <motion.div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665516339/2_3.2_aqlhwq.png"
              }
              className="img"
              fill
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Preview;

