import React from "react";
import Link from "next/link";

const ClientCard = (props) => {
  return (
    <Link href={props.page}><a className="client-card">
    <div className="video">
      <div className="btn-icon"><div className="icon i-arrow-right-up"></div></div>
    </div>
    <div className="client-detail">
      <p className="desc client-name">{props.clientname}</p>
      <div className="info">
        <p className="desc">{props.category}</p>
        <p className="desc">/</p>
        <p className="desc">{props.year}</p>
      </div>
    </div>
  </a></Link>
  );
};

export default ClientCard;
