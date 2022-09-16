import Layout from "../component/Layout";
import plus from "../assets/img/plus.svg";
import Image from "next/dist/client/image";

export default function contact() {
  return (
    <Layout>
      <section className="contact-hero">
        <div className="content-container">
        <a className="email" href="mailto:hello@dhimasputra.com" target='_blank' rel="noopener noreferrer"><h1>hello@dhimasputra.com</h1></a>
        <p className="desc text-center">Let’s connect your brain with me, and build a crazy product.</p>
        <div className="contact-container">
            <p>Follow my socials</p>
           <div className="contact-btn">
              <a href="https://www.upwork.com/freelancers/~010554d3d91f1f3997" rel="noopener noreferrer" target='_blank' className="btn-link">
                Upwork
              </a>
              <span>/</span>
              <a href="https://twitter.com/nathdhim" className="btn-link" target='_blank'  rel="noopener noreferrer" >
                Twitter
              </a>
              <span>/</span>
              <a href="https://dribbble.com/nathdhim" className="btn-link" target='_blank'  rel="noopener noreferrer" >
                Dribbble
              </a>
              <span>/</span>
              <a href="https://www.linkedin.com/in/nathdhim/" className="btn-link" target='_blank'  rel="noopener noreferrer" >
                Linkedin
              </a>
            </div>
           </div>
        </div>
      </section>
    </Layout>
  );
}