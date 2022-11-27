import { CaseCard } from "../component/Card";
import { Layout } from "../component/Layout";
import { fetcher } from "../lib/api";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "../component/Footer";
import Image from "next/future/image";

const easeCustom = [0.8, 0, 0.28, 1];

export default function Work({ showcases }) {
  const textAnimation = {
    animate: {
      y: [100, 0],
      transition: { ease: easeCustom, duration: 1.5, delay: 0.6 },
    },
  };

  return (
    <Layout title="Dhimas Putra • Work">
      <motion.div className="section-wrapper">
        <section className="work-hero row ">
          <div className="content-container col ">
            <div className="row h-100">
              <div className="of-hidden row w-100 ">
                <motion.div
                  className="img-wrapper w-100 hero-illustration"
                  animate={{
                    y: ["115%", "0%"],
                    transition: { ease: easeCustom, duration: 1.5, delay: 0.6 },
                  }}
                >
                  <Image
                    className="img"
                    src="/img/hero-illustration.svg"
                    fill
                    alt="hero text"
                  />
                </motion.div>
              </div>
            </div>
            <div className="text-container row">
              <div className="of-hidden w-100">
                <motion.p
                  className="text-start w-100"
                  variants={textAnimation}
                  animate="animate"
                >
                  Product designer building digital experiences.
                </motion.p>
              </div>
              <div className="of-hidden w-100">
                <motion.p
                  className="text-center w-100"
                  variants={textAnimation}
                  animate="animate"
                >
                  UIUX & Branding
                </motion.p>
              </div>
              <div className="of-hidden w-100">
                <motion.p
                  className="text-end w-100"
                  variants={textAnimation}
                  animate="animate"
                >
                  Experienced since 2018
                </motion.p>
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
                    <Link href={`cases/` + showcase.id} key={showcase}>
                      <a className="card-wrapper">
                        <CaseCard showcase={showcase} key={showcase} />
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
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
