
import Image from "next/future/image";
import { FooterCase } from "../../component/Footer";
import { motion } from "framer-motion";
import { fetcher } from "../../lib/api";
import Link from "next/link";
import {LayoutBlank} from '../../component/Layout';

const easeCustom = [0.8, 0, 0.28, 1];


export default function Case({showcase}) {
  return (
    <LayoutBlank>
    <nav>
        <div className="nav-container row">
          <div className="logo-container">
            <Link href="/#">
              <a className="btn-link">Back</a>
            </Link>
          </div>
          <div className="right-container row">
            <Link href={'' + (showcase.id - 1)} key={showcase.id}>
              <a className="btn-link">Prev</a>
            </Link>
            <p className="desc">—</p>
            <Link href={'' + (showcase.id + 1)} key={showcase.id}>
              <a className="btn-link">Next</a>
            </Link>
          </div>
        </div>
      </nav>
      <section className="case-hero" data-scroll-container>
        <div className="content-container">
          <div className="hero-text">
            <div className="text-wrapper-h3">
              <motion.h3
                className="desc"
                animate={{ y: [100, 0] }}
                transition={{
                  ease: easeCustom,
                  duration: 1.5,
                  delay: 2.3,
                }}
              >
                {showcase.attributes.title}
              </motion.h3>
            </div>
            <div className="text-wrapper-h1">
              <motion.h1
                animate={{ y: [100, 0] }}
                transition={{
                  ease: easeCustom,
                  duration: 1.5,
                  delay: 2.3,
                }}
              >
               {showcase.attributes.subtitle}
              </motion.h1>
            </div>
          </div>
          <div className="hero-img-wrapper">
            <motion.div
              className="hero-img"
              animate={{ height: ["0%", "100%"] }}
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
                <Image
                  alt="img"
                  data-scroll
                  data-scroll-speed="1"
                  className="img"
                  src={showcase.attributes.cover}
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
              {showcase.attributes.about}
              </h2>
            </div>
          </div>
          <div className="text-container desc-component">
            <p className="titled desc">My Role</p>
            <div className="content">
              <h2>
              {showcase.attributes.role}
              </h2>
            </div>
          </div>
          <div className="img-container">
            <div className="img-wrapper">
              <Image
                alt="img"
                
                src={showcase.attributes.showcase1}
                className="img"
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                alt="img"
                
                src={showcase.attributes.showcase2}
                className="img"
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                alt="img"
                
                src={showcase.attributes.showcase3}
                className="img"
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                alt="img"
                
                src={showcase.attributes.showcase4}
                className="img"
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                alt="img"
                
                src={showcase.attributes.showcase5}
                className="img"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <FooterCase />
      </LayoutBlank>
  );
}


export async function getServerSideProps({params}) {
const {slug} = params;
const casesRes = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases/${slug}`);
console.log(params);
return {
  props: {
    showcase: casesRes.data
  }
}
}