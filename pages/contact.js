
import { Layout } from "../component/Layout";
import { BtnLink, BtnPrimary } from "../component/Button";
import { motion } from "framer-motion";

const easeCustom = [0.8, 0, 0.28, 1];

export default function contact({ showcases }) {
  const textAnimation = {
    animate: { y: [100, 0], transition: { ease: easeCustom, duration: 1.5, delay: .6 } },
  };

  return (
    <Layout title="Dhimas Putra • Contact">
      <section className="contact-hero col ">
        <div className="content-container col  sb">
          <div className="email-container col gap-32 w-100 center">
           
            <div className="of-hidden">
                <motion.p variants={textAnimation} animate="animate" className="grey">Let’s connect your brain and bringing your ideas into the world</motion.p>
                </div>
            <div className="email-item-container row sb w-100">
              <a href="mailto:connect@halodhimas.com" className="btn-link" ><div className="of-hidden"><motion.h1 className="h1" variants={textAnimation} animate="animate" >connect@halodhimas.com</motion.h1 ></div></a>
              <BtnPrimary to="mailto:connect@halodhimas.com" label="Send Message" />
            </div>
          </div>
          <div className="social-container col w-100 gap-24">
            <p className="grey">Get in touch</p>
            <div className="social-item-container row sb w-100 gap-24">
              <div className="row gap-32">
              <BtnLink to="https://www.linkedin.com/in/halodhimas/" label="Linkedin" target="_blank"/>
              <BtnLink to="https://www.upwork.com/freelancers/~010554d3d91f1f3997" label="Upwork" target="_blank"/>
              <BtnLink to="https://dribbble.com/halodhimas" label="Dribbble" target="_blank" />
              <BtnLink to="https://www.instagram.com/halodhimas/" label="Instagram" target="_blank"/>
              </div>
              <div className="row gap-8">
                <p className="grey">Designer based in</p><BtnLink to="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLqrMM2D04szMS8nPSy3OTAQARUgG2A&q=indonesia&rlz=1C1UEAD_enID997ID997&oq=indonesia&aqs=chrome.1.0i271j46i433i512j69i59j0i131i433i512j0i433i512j69i61l3.3567j0j7&sourceid=chrome&ie=UTF-8" label="Indonesia" target="_blank" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
