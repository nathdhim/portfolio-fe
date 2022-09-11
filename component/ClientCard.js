import React from "react";
import Image from "next/image";
import { dot } from "../assets/icon/dot.svg";

const ClientCard = (props) => {
  return (
    <a className="client-card">
      <div className="client-video">
        <div className="video"></div>
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
