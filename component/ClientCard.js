import React from "react";
import Image from "next/image";
import { arrow_right_up } from "../assets/icon/arrow-right-up.svg";

const ClientCard = (props) => {
  return (
    <a className="client-card">
      <div className="video">
        <div className="icon-container"><div className="icon"></div></div>
      </div>
      <div className="client-detail">
        <p className="desc client-name">{props.clientname}</p>
        <div className="info">
          <p className="desc">{props.category}</p>
          <p className="desc">/</p>
          <p className="desc">{props.year}</p>
        </div>
      </div>
    </a>
  );
};

export default ClientCard;
