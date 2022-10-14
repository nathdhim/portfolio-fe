import {LayoutCase} from "./Layout";
import Image from "next/future/image";
import { FooterCase } from "./Footer";
import { motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

export default function Case(props) {


  return (
    <LayoutCase>
      <section className="case-hero" data-scroll-container>
        <div className="content-container">
          <div className="hero-text">
          <div className="text-wrapper-h3">
            <motion.h3
            className="desc"
            animate={{y:[100, 0]}}
            transition={{
                ease: easeCustom,
                duration: 1.5,
                delay: 2.3,
              }}>Quibee.io</motion.h3>
            </div>
            <div className="text-wrapper-h1">
            <motion.h1
            animate={{y:[100, 0]}}
            transition={{
                ease: easeCustom,
                duration: 1.5,
                delay: 2.3,
              }}>Crypto Token Swap App</motion.h1>
            </div>
          </div>
         <div className="hero-img-wrapper">
           <motion.div className="hero-img" 
            animate={{ height: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}>
            <motion.div className="img-wrapper" 
              animate={{ scale: [1.5, 1] }}
              transition={{
                ease: easeCustom,
                duration: 1,
                delay: 1.8,
              }}>
            <Image alt="img" data-scroll data-scroll-speed="1"
              className="img"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              fill
            />
            </motion.div>
          </motion.div>
         </div>
        </div>
      </section>
      <section className="case-about" data-scroll-container>
        <div className="content-container">
          <div className="text-container desc-component">
            <p className="titled desc">About</p>
            <div className="content">
              <h2>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
                <br/>
                <br/>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
              </h2>
             
            </div>
          </div>
          <div className="text-container desc-component">
            <p className="titled desc">My Role</p>
            <div className="content">
            <h2>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
                <br/>
                <br/>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
              </h2>
            </div>
          </div>
         <div className="img-container">
         <div className="img-wrapper">
          
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper" >
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={ 
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image alt="img" data-scroll data-scroll-speed="1"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
         </div>
        </div>
      </section>
      <FooterCase/>
    </LayoutCase>
  );
}
