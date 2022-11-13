import Image from "next/future/image";
import { BtnLink, Container } from "../../component/Button";
import { motion } from "framer-motion";
import { fetcher } from "../../lib/api";
import { Layout } from "../../component/Layout";
import ScrollToTop from "../../component/ScrollToTop";
import ReactMarkdown from "react-markdown";

const easeCustom = [0.8, 0, 0.28, 1];

export default function Case({ showcase }) {
  const textAnimation = {
    animate: { y: [100, 0], transition: { ease: easeCustom, duration: 1.5 } },
  };

  return (
    <Layout>
      <section className="case-hero row">
        <div className="content-container col gap-160 align-center">
          <div className="case-header w-100 col gap-64">
            <div className="row gap-8">
              <BtnLink to="/#" label="Work" />
              <Image
                src="/icon/arrow-right-grey.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <motion.p>{showcase.attributes.slug}</motion.p>
            </div>
            <div className="case-title col gap-48">
              <div className="col gap-24">
                <div className="of-hidden">
                  <motion.h1 variants={textAnimation} animate="animate">
                    {showcase.attributes.title}
                  </motion.h1>
                </div>
                <div className="of-hidden">
                  <motion.p
                    variants={textAnimation}
                    animate="animate"
                    className="grey"
                  >
                    {showcase.attributes.subtitle}
                  </motion.p>
                </div>
              </div>
              <div className="case-detail row sb gap-120">
                <div className="detail-item-container  col gap-16">
                  <div className="of-hidden">
                    <motion.p
                      variants={textAnimation}
                      animate="animate"
                      className="grey"
                    >
                      Role / Services
                    </motion.p>
                  </div>
                  <span className="line"></span>
                  <div className="of-hidden">
                    <motion.p variants={textAnimation} animate="animate">
                      {showcase.attributes.role}
                    </motion.p>
                  </div>
                </div>
                <div className="detail-item-container  col gap-16">
                  <div className="of-hidden">
                    <motion.p
                      variants={textAnimation}
                      animate="animate"
                      className="grey"
                    >
                      Category
                    </motion.p>
                  </div>
                  <span className="line"></span>
                  <div className="of-hidden">
                    <motion.p variants={textAnimation} animate="animate">
                      {showcase.attributes.category}
                    </motion.p>
                  </div>
                </div>
                <div className="detail-item-container  col gap-16">
                  <div className="of-hidden">
                    <motion.p
                      variants={textAnimation}
                      animate="animate"
                      className="grey"
                    >
                      Year
                    </motion.p>
                  </div>
                  <span className="line"></span>
                  <div className="of-hidden">
                    <motion.p variants={textAnimation} animate="animate">
                      {showcase.attributes.year}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cover-container w-100">
            <div className="img-wrapper img-screen">
              <Image src={showcase.attributes.cover} fill alt="img" />
            </div>
            <div className="img-wrapper cover-img">
              <Image
                src="https://res.cloudinary.com/dtwh4nrmh/image/upload/v1667579633/device-macpro-higher_xm8vwu.webp"
                fill
                alt="img"
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="col gap-32 w-50">
            <p className="grey">Overview</p>
            <ReactMarkdown className="h2 regular" >
              {showcase.attributes.about}
            </ReactMarkdown>
          </div>
          <div className="img-container col gap-32 w-100">
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase1} fill alt="img" />
            </Container>
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase2} fill alt="img" />
            </Container>
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase3} fill alt="img" />
            </Container>
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase4} fill alt="img" />
            </Container>
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase5} fill alt="img" />
            </Container>
            <Container classname="img-wrapper size-mid">
              <Image src={showcase.attributes.showcase6} fill alt="img" />
            </Container>
          </div>
          <div className="testi-container col gap-24 w-50 align-center">
            <h2 className="regular text-center">
              {showcase.attributes.testimoni}
            </h2>
            <p className="grey">{showcase.attributes.client}</p>
          </div>
          <div className="line"></div>
          <div className="cta row w-100 sb">
            <div className="row gap-16 ">
              <Image
                src="/icon/arrow-left.svg"
                width={56}
                height={56}
                alt="icon"
                className="icon"
              />
              <BtnLink
                label="Prev"
                to={`${
                  showcase.id - 1 < 1 ? showcase.id + 4 : showcase.id - 1
                }`}
                key={showcase.id}
              />
            </div>
            <div className="row gap-16">
              <BtnLink
                label="Next"
                to={`${
                  showcase.id + 1 > 5 ? showcase.id - 4 : showcase.id + 1
                }`}
                key={showcase.id}
              />
              <Image
                src="/icon/arrow-right.svg"
                width={56}
                height={56}
                alt="icon"
                className="icon"
              />
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop/>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const casesRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/cases/${id}`
  );
  console.log(params);
  return {
    props: {
      showcase: casesRes.data,
    },
  };
}
