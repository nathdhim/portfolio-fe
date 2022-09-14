import Layout from "../component/Layout";
import plus from "../assets/img/plus.svg";
import Image from "next/dist/client/image";

export default function contact() {
  return (
    <Layout>
      <section className="contact-hero">
        <div className="content-container">
        <a className="email" href="#">hello@dhimasputra.com</a>
        <p className="desc">Let’s connect your brain with me, and build a crazy product.</p>
        <div className="contact-container">
            <p>Follow my socials</p>
           <div className="contact-btn">
              <a className="btn-link">
                Upwork
              </a>
              <span>/</span>
              <a className="btn-link">
                Twitter
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
        </div>
      </section>
    </Layout>
  );
}