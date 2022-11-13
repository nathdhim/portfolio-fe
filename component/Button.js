import Image from "next/future/image";
import Link from "next/link";
import { motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

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
        <a  className="btn-icon row">
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
        <a className={`btn-link ${props.addClass}`} target={props.target}>{props.label}</a>
      </Link>
    </div>
  );
}

function Container(props) {
 
  return (
    <motion.div className={props.classname}
    initial={{opacity: 0}}
    whileInView={{
      opacity: 1
    }}
    transition={{ease:easeCustom, duration:1}}>
     {props.children}
    </motion.div>
  );
}

export { BtnIcon, BtnPrimary, BtnLink, Container };
