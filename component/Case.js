import Layout from "./Layout";
import Image from "next/future/image";
import { FooterCase } from "./Footer";

export default function Case(props) {
  return (
    <Layout>
      <section className="case-hero">
        <div className="content-container">
          <div className="hero-text">
            <h3 className="desc">Quibee.io</h3>
            <h1>Crypto Token Swap Platform</h1>
          </div>
          <div className="hero-img-container">
            <Image
              className="img"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              fill
            />
          </div>
        </div>
      </section>
      <section className="case-about">
        <div className="content-container">
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
         <div className="img-container">
         <div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1664864703/Rectangle_1_cooxah.png"
              }
              className="img"
              fill
            />
          </div>
          <div className="img-wrapper">
            <Image
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
    </Layout>
  );
}
