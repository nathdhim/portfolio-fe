import Layout from "./Layout";
import Link from "next/link";

export default function Case(props) {
  return (
    <Layout>
      <section className="case-hero">
        <div className="content-container">
          <div className="title-container">
            <div className="client-name">
              <h2>{props.clientname}</h2>
              <Link href='/#' ><div className="btn-icon"><div className="icon i-close"></div></div></Link>
            </div>
            <div className="client-detail">
              <p className="desc category">Industry : <span>{props.category}</span> </p>
              <p className="desc" >/</p>
              <p className="desc category">Year : <span>{props.year}</span> </p>
            </div>
          </div>
          <div className={props.classimg1}></div>
          <div className="text-container">
            <h2>About</h2>
            <p className="desc" >{props.about}</p>
          </div>
          <div className="img-container">
          <div className={props.classimg2}></div>
          <div className={props.classimg3}></div>
          <div className={props.classimg4}></div>
          </div>
          <div className="text-container">
            <h2>Unique Point</h2>
            <p className="desc" >{props.unique}</p>
          </div>
          <div className="img-container">
          <div className={props.classimg5}></div>
          <div className={props.classimg6}></div>
          </div>
          <p>© 2022 Dribbble. All rights reserved.</p>
        </div>
      </section>
    </Layout>
  );
}
