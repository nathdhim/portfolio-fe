import Layout from "../component/Layout";
import plus from "../assets/img/plus.svg";
import Image from "next/dist/client/image";

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <div className="content-container">
        <div className="hero-video"></div>
          <div className="hero-text">
            <h1>A crazy designer who’s designing crazy products.</h1>
           <div className="hero-contact">
           <div className="contact-container">
            <p>Get in touch</p>
           <div className="contact-btn">
              <a className="btn-link">
                Email
              </a>
              <span>/</span>
              <a className="btn-link">
                Dribbble
              </a>
              <span>/</span>
              <a className="btn-link">
                Linkedin
              </a>
            </div>
           </div>
           <Image src={plus}/>
           </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
