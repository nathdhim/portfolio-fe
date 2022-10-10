import {Layout} from "../component/Layout";
import Image from "next/future/image";
import { motion } from "framer-motion";
import {FooterCase} from '../component/Footer';

const easeCustom = [0.75, -0.01, 0.34, 1];

export default function about() {
  return (
    <Layout>
      <section className="about-hero" >
        <div className="content-container">
          <div className="hero-img-wrapper" >
          <motion.div
            className="hero-img"
            animate={{ height: ["0", "20em"] }}
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
              <Image data-scroll data-scroll-speed="1"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img"
                fill
              />
            </motion.div>
          </motion.div>
          </div>

          <div className="text-container">
            <p className="titled desc">About</p>
            <div className="content">
              <h2>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
              </h2>
              <h2>
                Ut voluptatem fugiat eos officiis tempora explicabo non illo
                possimus. Hic qui placeat quia sit et dolores expedita fugiat.
                Impedit ut non ex. Qui eaque at. Sit voluptatem nam maxime.
              </h2>
            </div>
          </div>
          <div className="text-container">
            <p className="titled desc">Experience</p>
            <div className="content">
              <div className="work-card">
                <h2>UIUX Designer @ Itsavirus</h2>
                <p className="desc">Jul 2022 - Today</p>
              </div>
              <div className="work-card">
                <h2>Product Designer Freelancer</h2>
                <p className="desc">Sep 2021 - Today</p>
              </div>
              <div className="work-card">
                <h2>UIUX Designer & Illustrator @ Boxylabs</h2>
                <p className="desc">Okt 2021 - Feb 2022</p>
              </div>
              <div className="work-card">
                <h2>UIUX Designer Intern @ The Puzzlers</h2>
                <p className="desc">Jul 2021 - Sep 2021</p>
              </div>
            </div>
          </div>
          <div className="text-container">
            <p className="titled desc">Expertise</p>
            <div className="content">
              <h2>Interface Design</h2>
              <h2>User Experience Design</h2>
              <h2>Prototyping</h2>
              <h2>Branding</h2>
              <h2>Illustration</h2>
              <h2>Front-end developing</h2>
            </div>
          </div>
          <div className="text-container">
            <p className="titled desc">Interest</p>
            <div className="content img-content">
             <div className="img-container">
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
             </div>
            
             <div className="img-container">
             
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
                <div className="img-wrapper">
                <Image src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img" fill/>
                </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCase/>
    </Layout>
  );
}
