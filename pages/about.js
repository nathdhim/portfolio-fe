import Layout from "../component/Layout";
import Image from "next/future/image";
import { motion } from "framer-motion";


export default function about() {
  return (
    <Layout>
      <section className="about-hero">
        <div className="content-container">
          <motion.div
            className="hero-img"
            animate={{ height: ["0", "20em"] }}
            transition={{
              ease: [0.75, -0.01, 0.34, 1],
              duration: 1,
              delay: 0.5,
            }}
          >
            <motion.div
              className="img-wrapper"
              animate={{ scale: [1.35, 1] }}
              transition={{
                ease: [0.75, -0.01, 0.34, 1],
                duration: 1,
                delay: 0.5,
              }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
                }
                className="img"
                fill
              />
            </motion.div>
          </motion.div>

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
                <p className="desc">Jul 2022 - Present</p>
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
            <p className="titled desc">Work With</p>
            <div className="content">
              <h2>Mijn Sollicitatie</h2>
              <h2>Artreon</h2>
              <h2>Joov</h2>
              <h2>Wagerwith</h2>
              <h2>Quibee</h2>
              <h2>Healta Apps</h2>
              <h2>Ario AI</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
