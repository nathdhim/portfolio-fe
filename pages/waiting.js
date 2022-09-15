import Layout from "../component/Layout";
import plus from "../assets/img/plus.svg";
import Image from "next/dist/client/image";

export default function waiting() {
  return (
    <Layout>
      <section className="waiting-hero">
        <div className="content-container">
        <div className="hero-text">
        <h1 className="text-center" >This page is under development :)</h1>
        <p className="desc text-center" >Keep Waiting, I’ll launch the feature ASAP.</p>
        </div>
        </div>
      </section>
    </Layout>
  );
}