import Image from "next/future/image";
function FooterSocial() {
  return (
    <>
      <footer className="footer-social">
        <div className="footer-container">
          
          <div className="footer-item-container">
          <a
                href="https://www.upwork.com/freelancers/~010554d3d91f1f3997"
                rel="noopener noreferrer"
                target="_blank"
                className="btn-link"
              >
                Upwork
              </a>

              <a
                href="https://instagram.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://dribbble.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>

              <a
                href="https://www.linkedin.com/in/halodhimas/"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
          </div>
          
        </div>
      </footer>
    </>
  );
}

function FooterDefault() {
  return (
    <>
      <footer className="footer-default">
        <div className="footer-container row">
          <p className="desc">©halodhimas.com • 2022</p>
          <div className="footer-item-container">
          <a
                href="https://www.upwork.com/freelancers/~010554d3d91f1f3997"
                rel="noopener noreferrer"
                target="_blank"
                className="btn-link"
              >
                Upwork
              </a>

              <a
                href="https://instagram.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://dribbble.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>

              <a
                href="https://www.linkedin.com/in/halodhimas/"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
          </div>
          
        </div>
      </footer>
    </>
  );
}

function FooterCase() {
  return (
    <>
      <footer className="footer-case">
        <div className="footer-container">
          
         <div className="top-container">
          <p className="desc">Have an awesome idea ?</p>
          <div className="email-wrapper">
          <a
            className="email btn-link"
            href="mailto:connect@halodhimas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>connect@halodhimas.com</h1>
          </a>
          <Image alt="icon" className="img" src="/icon/dot.svg" width={72} height={72} />
          </div>
         </div>
          <div className="bottom-container">
            <p className="desc">©halodhimas.com • 2022</p>
            
          <div className="footer-item-container">
          <a
                href="https://www.upwork.com/freelancers/~010554d3d91f1f3997"
                rel="noopener noreferrer"
                target="_blank"
                className="btn-link"
              >
                Upwork
              </a>

              <a
                href="https://instagram.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://dribbble.com/halodhimas"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>

              <a
                href="https://www.linkedin.com/in/halodhimas/"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export {FooterSocial, FooterCase, FooterDefault};