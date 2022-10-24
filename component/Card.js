import { motion, AnimatePresence } from "framer-motion";
import {BtnIcon, BtnPrimary} from "./Button";
import Image from "next/future/image";
import { FooterDefault } from "./Footer";
import Modal from "react-modal";
import { useState } from "react";





const easeCustom = [0.8, 0, 0.28, 1];

const CaseCard = ({showcase}) => {
  return (
    
     
        <motion.div className="case-card row">
          
          <motion.div
            className="container"
            animate={{ height: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.5,
            }}
          >
           
            <motion.div
              className="img-wrapper"
              animate={{ scale: [1.5, 1] }}
              transition={{
                ease: easeCustom,
                duration: 1,
                delay: 1.5,
              }}
            >
               
              <Image
                className="img" alt="image"
                src={showcase.attributes.thumbnail}
                fill
              />
            </motion.div>
            
          </motion.div>
          
        </motion.div>
     
  
  );
};

///////////////////////////////////// Product Preview /////////////////////////////////////////////////

function ProductCard({showProduct}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal}>
      <motion.div className="product-card column">
      <motion.div className="detail-product row">
            <div className="item-container row">
            <p className="title">{showProduct.attributes.title}</p>
            
            </div>
            </motion.div>
        <motion.div
          
          className="container"
          animate={{ height: ["0%", "100%"] }}
          transition={{
            ease: easeCustom,
            duration: 1,
            delay: 1.5,
          }}
        >
         

          <motion.div
            className="img-wrapper"
            animate={{ scale: [1.5, 1] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.5,
            }}
          >
            <Image
              className="img" alt="image"
              src={showProduct.attributes.thumbnail}
              fill
            />
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={950}
        className="preview-modal"
        overlayClassName="overlay"
      >
        <AnimatePresence>
          <motion.div className="btn-icon row">
            <Image
            alt="icon"
              className="icon"
              src="/icon/close.svg"
              width={24}
              height={24}
              onClick={closeModal}
            />
          </motion.div>
          <div className="overlay-wrapper"></div>
      <section className="preview-container row">
        <div className="content-container column">
          <div className="product-header row ">
            <div className="product-title column">
              <h1>{showProduct.attributes.title}</h1>
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
                    <span className="desc">Created by </span> {showProduct.attributes.creator}
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
                    <span className="desc">Compatible with </span>{showProduct.attributes.compatible}
                  </p>
                </div>
              </div>
            </div>
            <BtnPrimary to={showProduct.attributes.link} src="/icon/download.svg" label="Download" />
          </div>
          <div className="product-img row">
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={showProduct.attributes.showcase1}
                fill
              />
            </div>
            
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={showProduct.attributes.showcase2}
                fill
              />
            </div>
            <div className="img-wrapper">
              <Image
                className="img"
                alt="image"
                src={showProduct.attributes.showcase3}
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
                    <span className="desc ">File size :</span> {showProduct.attributes.size}<span> Mb</span>
                  </p>
            </div>
          <FooterDefault />
        </div>
      </section>
        </AnimatePresence>
      </Modal>
    </div>
  );
}

export { CaseCard, ProductCard };
