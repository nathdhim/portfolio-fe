import Layout from "../component/layout";
import CaseCard from "../component/case-card";
import Footer from "../component/footer";

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
