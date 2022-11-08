import Image from "next/future/image";
import { BtnPrimary } from "./Button";
import { BtnLink } from "./Button";

function FooterDefault() {
  return (
    <>
      <footer className="footer-default col center">
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
              <BtnLink to="#" label="Linkedin" />
              <BtnLink to="#" label="Upwork" />
              <BtnLink to="#" label="Dribbble" />
              <BtnLink to="#" label="Instagram" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { FooterDefault };
