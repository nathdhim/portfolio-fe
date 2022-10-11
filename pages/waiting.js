import {Layout} from "../component/Layout";


export default function waiting() {
  return (
    <Layout>
      <section className="waiting-hero column">
        <div className="content-container column">
        <div className="hero-text">
        <h1 className="text-center" >This page is under development :)</h1>
        <p className="desc text-center" >Keep Waiting, I’ll launch the feature ASAP.</p>
        </div>
        </div>
      </section>
    </Layout>
  );
}