import Image from "next/future/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

function BtnPrimary(props) {
  return (
    <div>
      <Link href={props.to} target="_blank" passHref>
        <a target="_blank">
          <div className="btn-primary row center">
            <h3 className="text-center regular">{props.label}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}

function BtnIcon(props) {
  return (
    <div>
      <Link href={props.to} target="_blank">
        <a target="_blank" className="btn-icon row">
          <Image
            alt="icon"
            className="icon"
            src={props.src}
            width={20}
            height={20}
          />
        </a>
      </Link>
    </div>
  );
}

function BtnLink(props) {
  return (
    <div>
      <Link href={props.to} >
        <a className="btn-link" target={props.target}>{props.label}</a>
      </Link>
    </div>
  );
}

function Container(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div className={props.classname} ref={ref}
    style={{
      
      opacity: isInView ? 1 : 0,
      transition: "all 1.5s cubic-bezier(0.8, 0, 0.16, 1) ",
    }}>
     {props.children}
    </motion.div>
  );
}

export { BtnIcon, BtnPrimary, BtnLink, Container };
