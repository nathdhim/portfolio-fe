import Image from "next/future/image";
import { BtnPrimary } from "./Button";
import { BtnLink } from "./Button";

function Footer() {
  return (
    <>
      <footer className="footer col center">
        <div className="content-container col gap-80">
          <div className="col gap-32">
            <p className="grey">Have an awesome idea ?</p>
            <div className="cta-container row sb gap-32">
              <div className="cta-text row gap-12">
                <h1>CONNECT YOUR BRAIN</h1>
                <Image
                  src="/icon/arrow-right-white.svg"
                  width={56}
                  height={56}
                  alt="icon"
                  className="icon"
                />
              </div>
              <BtnPrimary to="mailto:connect@halodhimas.com" label="connect@halodhimas.com" />
            </div>
          </div>
          <div className="contact-container row sb gap-32">
            <div className="row gap-12">
              <Image
                src="/icon/globe.svg"
                width={24}
                height={24}
                alt="icon"
                className="icon"
              />
              <p className="grey">Based in Indonesia</p>
            </div>
            <div className="social-item-container row gap-32">
              <BtnLink to="https://www.linkedin.com/in/halodhimas/" label="Linkedin" target="_blank"/>
              <BtnLink to="https://www.upwork.com/freelancers/~010554d3d91f1f3997" label="Upwork" target="_blank"/>
              <BtnLink to="https://dribbble.com/halodhimas" label="Dribbble" target="_blank"/>
              <BtnLink to="https://www.instagram.com/halodhimas/" label="Instagram" target="_blank"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
