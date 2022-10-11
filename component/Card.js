import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BtnIcon from "./Button";
import Image from "next/future/image";

const easeCustom = [0.75, -0.01, 0.34, 1];

const CaseCard = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Link href={props.to}>
        <motion.a className="case-card row">
          <motion.div
            className="container"
            animate={{ height: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <motion.div
              className="img-wrapper"
              animate={{ scale: [1.5, 1] }}
              transition={{
                ease: easeCustom,
                duration: 1,
                delay: 1.8,
              }}
            >
              <Image
                className="img"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665516339/2_3.2_aqlhwq.png"
                }
                fill
              />
            </motion.div>
          </motion.div>
        </motion.a>
      </Link>
    </AnimatePresence>
  );
};

const ProductCard = (props) => {
  return (
    <div>
      <Link href="#">
        <motion.a className="product-card column">
          <motion.div
            className="container"
            animate={{ height: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <motion.div
              className="img-wrapper"
              animate={{ scale: [1.5, 1] }}
              transition={{
                ease: easeCustom,
                duration: 1,
                delay: 1.8,
              }}
            >
              <Image
                className="img"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665474962/original-1f20bdbf3586bb83583b71b4b067733b_ltwpqy.webp"
                }
                fill
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="detail-product row"
            animate={{ opacity: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <p className="title desc">Title</p>
            <BtnIcon to="#" src="/icon/download.svg" />
          </motion.div>
        </motion.a>
      </Link>
    </div>
  );
};

export { CaseCard, ProductCard };
