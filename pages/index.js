import Layout from "../component/Layout";
import CaseCard from "../component/CaseCard";
import Footer from "../component/Footer";

export default function Work() {
  return (
    <Layout>
      <section className="work-hero">
        <div className="content-container">
          <div className="hero-showcase">
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
            <CaseCard/>
          </div>
        </div>
      </section>
      <Footer/>
    </Layout>
  );
}
