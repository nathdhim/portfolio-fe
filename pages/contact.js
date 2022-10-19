import {Layout} from "../component/Layout";
import Image from "next/future/image";
import {FooterSocial} from "../component/Footer";

export default function contact() {
  return (
    <Layout>
      <section className="contact-hero column">
        <div className="content-container column">

        <p className="desc text-center">
          Let’s connect your brain with me.
          </p>
          
          <a
            className="email btn-link"
            href="mailto:connect@halodhimas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>connect@halodhimas.com</h1>
          </a>
         
          <div className="text-container">
            <p>Get in touch</p>
            <Image  alt="image" src="/icon/arrow-down.svg" width={24} height={24}/>
          </div>
          
        </div>
      </section>
      <FooterSocial/>
    </Layout>
  );
}
