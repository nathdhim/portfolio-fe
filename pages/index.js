import Image from "next/future/image";
import { CaseCard } from "../component/Card";
import { Layout } from "../component/Layout";
import { fetcher } from "../lib/api";
import Link from "next/link";
import { motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

function Home({ showcases }) {

  const textAnimation = {
    
    animate: { y:[100,0], transition: {ease: easeCustom, duration: 1.5,} },

  }

  return (
    <Layout>
      <section className="home-hero row" id="home-hero">
        <div className="content-container col gap-160 ">
          <div className="text-container col gap-32">
          <div className="of-hidden">
                <motion.p variants={textAnimation} animate="animate" className="grey">Howdy, I'm Dhimas Putra</motion.p>
                </div>
            <div className="heading-container row sb align-end ">
              <motion.h1 className="w-100" >
                <div className="of-hidden">
                <motion.span className="col" variants={textAnimation} animate="animate" >Expert Product Designer Building</motion.span>
                </div>
                <div className="of-hidden">
                <motion.span className="col" variants={textAnimation} animate="animate" >Digital Experiences From Indonesia</motion.span>
                </div>
              </motion.h1>
             <div className="of-hidden">
             <motion.div variants={textAnimation} animate="animate">
             <Image
             variants={textAnimation} animate="animate"
                className="icon"
                src="/icon/dot.svg"
                width={64}
                height={64}
                alt="icon"
              />
             </motion.div>
             </div>
            </div>
          </div>
          <div className="case-container col gap-160">
            {showcases &&
              showcases.data.map((showcase) => {
                return (
                  <Link href={`cases/` + showcase.id} key={showcase}>
                    <a className="card-wrapper">
                      <CaseCard showcase={showcase} key={showcase} />
                    </a>
                  </Link>
                );
              })}
          </div>
          <div className="about-text col gap-32">
            <p className="grey">About Me</p>
            <h2 className="regular">
              Interface crafter based in somewhere in the universe.
              Experimenting with prototyping and user interfaces. Focused on
              simplicity, accessibility and interactions to my work.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const showcases = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/cases`
  );

  return {
    props: { showcases },
    revalidate: 10,
  };
}
export default Home;
