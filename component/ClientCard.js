import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ClientCard = (props) => {
  return (
    <Link href={props.page}>
      <a className="client-card">
        <motion.div
          className="video-container"
          style={{originY:1}}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1}}
          transition={{duration: 0.25, ease: "easeOut", delay: 0.5}}
         
        >
          <div className="btn-icon">
            <div className="icon i-arrow-right-up"></div>
          </div>
          <video autoPlay muted playsInline loop src={props.source}></video>
        </motion.div>
        <div className="client-detail">
          <p className="desc client-name">{props.clientname}</p>
          <div className="info">
            <p className="desc">{props.category}</p>
            <p className="desc">/</p>
            <p className="desc">{props.year}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ClientCard;
