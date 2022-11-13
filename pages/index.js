import Image from "next/future/image";
import { CaseCard } from "../component/Card";
import { AnimateLayout } from "../component/Layout";
import { fetcher } from "../lib/api";
import Link from "next/link";
import ScrollToTop from "../component/ScrollToTop";
import {
  motion,
  useScroll,
  useViewportScroll,
  useTransform,
} from "framer-motion";


const easeCustom = [0.8, 0, 0.28, 1];

export default function Work({ showcases }) {
  const textAnimation = {
    animate: { y: [100, 0], transition: { ease: easeCustom, duration: 1.5 } },
  };

  const colorOutput = ["#0a0a0a", "#F8F8F8"];
  const textOutput = ["#F8F8F8", "#0a0a0a"];
  const { scrollYProgress } = useViewportScroll();
  const background = useTransform(scrollYProgress, [0, 0.05], colorOutput);
  const color = useTransform(scrollYProgress, [0, 0.02], textOutput);

  return (
    <AnimateLayout>
      <motion.div className="section-wrapper" style={{ background }}>
      <section
        className="work-hero row align-end"
        
      >
        <div className="content-container col ">
          <div className="text-container col gap-32">
            <div className="of-hidden">
              <motion.p
                variants={textAnimation}
                animate="animate"
                className="grey"
              >
                Halo, I'm Dhimas Putra
              </motion.p>
            </div>
            <div className="heading-container row sb align-end ">
              <motion.h1 className="w-100 display" style={{ color }}>
                <div className="of-hidden">
                  <motion.span
                    className="col"
                    variants={textAnimation}
                    animate="animate"
                  >
                    Expert Product Designer
                  </motion.span>
                </div>
                <div className="of-hidden">
                  <motion.span
                    className="col"
                    variants={textAnimation}
                    animate="animate"
                  >
                    Building Digital Experiences
                  </motion.span>
                </div>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section row">
        <div className="content-container col gap-160 ">
          <div className="case-container col gap-160">
            {showcases &&
              showcases.data.map((showcase) => {
                return (
                  <Link href={`cases/` + showcase.id} key={showcase} >
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
      </motion.div>
      <ScrollToTop/>
    </AnimateLayout>
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

