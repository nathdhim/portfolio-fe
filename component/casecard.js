import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/future/image";

const CaseCard = (props) => {
  return (
    <Link href="#">
      <motion.a
        className="case-card"
       
       
      >
        <motion.div
          className="container"
          
          animate={{ width: ["0%", "100%"] }}
          transition={{
            ease: [0.75, -0.01, 0.34, 1],
            duration: 1,
            delay: 0.75,
          }}
        >
          <motion.div
            className="img-wrapper"
            
            animate={{ scale: [1.35,1] }}
            transition={{
              ease: [0.75, -0.01, 0.34, 1],
              duration: 1,
              delay: 0.75,
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
  );
};

export default CaseCard;
