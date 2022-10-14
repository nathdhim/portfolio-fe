import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FooterDefault } from "./Footer";
import { BtnPrimary } from "./Button";
import Image from "next/future/image";
const easeCustom = [0.8, 0, 0.28, 1];

function Preview() {
  return (
    <AnimatePresence>
      <div className="overlay-wrapper"></div>
      <section className="preview-container row">
        <div className="content-container column">
          <div className="product-header row ">
            <div className="product-title column">
              <h1>Dynamic Island Prototype</h1>
              <div className="product-detail row">
                <div className="desc-row row">
                  <Image
                    alt="icon"
                    className="icon"
                    src="/icon/dot.svg"
                    width={16}
                    height={16}
                  />
                  <p>
                    <span className="desc">Created by</span> Dhimas Putra
                  </p>
                </div>
                <div className="desc-row row">
                  <Image
                    alt="icon"
                    className="icon"
                    src="/icon/dot.svg"
                    width={16}
                    height={16}
                  />
                  <p>
                    <span className="desc">Compatible with</span> Figma & Sketch
                  </p>
                </div>
              </div>
            </div>
            <BtnPrimary to="#" src="/icon/download.svg" label="Download" />
          </div>
          <div className="product-img row">
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665641752/Product_Card_lefr5l.png"
                }
                fill
              />
            </div>
            
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665641752/Product_Card_lefr5l.png"
                }
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665641752/Product_Card_lefr5l.png"
                }
                fill
              />
            </div>
           
          </div>
          <div className="product-note row">
            <div className="desc-row row">
                  <Image
                    alt="icon"
                    className="icon"
                    src="/icon/warning.svg"
                    width={16}
                    height={16}
                  />
                  <p className="desc">
                  Please don't trade these design assets because you get them for free

                  </p>
                </div>
                <p className="size">
                    <span className="desc ">File size :</span> 1.9 Mb
                  </p>
            </div>
          <FooterDefault />
        </div>
      </section>
    </AnimatePresence>
  );
}

export default Preview;
