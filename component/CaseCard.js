import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/future/image";

const easeCustom = [0.75, -0.01, 0.34, 1];

const CaseCard = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Link href={props.to}>
      <motion.a
        className="case-card"
      >
        <motion.div
          className="container"
          animate={{ width: ["0%", "100%"] }}
          transition={{
            ease: easeCustom,
            duration: 1,
            delay: 1.8,
          }}
        >
          <motion.div
            className="img-wrapper"
            
            animate={{ scale: [1.5,1] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <Image
              className="img"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664817039/samples/2_3.2_xyousp.png"
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

export default CaseCard;
