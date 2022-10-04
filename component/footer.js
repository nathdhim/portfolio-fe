import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <footer>
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
                href="https://twitter.com/nathdhim"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>

              <a
                href="https://dribbble.com/nathdhim"
                className="btn-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>

              <a
                href="https://www.linkedin.com/in/nathdhim/"
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
