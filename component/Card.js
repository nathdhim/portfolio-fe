import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {BtnIcon} from "./Button";
import Image from "next/future/image";
import Modal from "react-modal";
import { useState } from "react";
import Preview from "./Preview";

const easeCustom = [0.8, 0, 0.28, 1];

const CaseCard = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Link href={props.to}>
        <motion.a className="case-card row">
          <motion.div
            className="container"
            animate={{ height: ["0%", "100%"] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <motion.div
              className="img-wrapper"
              animate={{ scale: [1.5, 1] }}
              transition={{
                ease: easeCustom,
                duration: 1,
                delay: 1.8,
              }}
            >
              <Image
                className="img" alt="image"
                src={
                  "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665516339/2_3.2_aqlhwq.png"
                }
                fill
              />
            </motion.div>
          </motion.div>
        </motion.a>
      </Link>
    </AnimatePresence>
  );
};

///////////////////////////////////// Product Preview /////////////////////////////////////////////////

function ProductCard(props) {
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
      <motion.a className="product-card column">
      <motion.div className="detail-product row">
            <div className="item-container row">
            <p className="title">Dinamic Island - Prototype</p>
            <BtnIcon to="#" src="/icon/download.svg" />
            </div>
            </motion.div>
        <motion.div
          
          className="container"
          animate={{ height: ["0%", "100%"] }}
          transition={{
            ease: easeCustom,
            duration: 1,
            delay: 1.8,
          }}
        >
         

          <motion.div
            className="img-wrapper"
            animate={{ scale: [1.5, 1] }}
            transition={{
              ease: easeCustom,
              duration: 1,
              delay: 1.8,
            }}
          >
            <Image
              className="img" alt="image"
              src={
                "https://res.cloudinary.com/dtwh4nrmh/image/upload/v1665641752/Product_Card_lefr5l.png"
              }
              fill
            />
          </motion.div>
        </motion.div>
      </motion.a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={1000}
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
          <Preview />
        </AnimatePresence>
      </Modal>
    </div>
  );
}

export { CaseCard, ProductCard };
