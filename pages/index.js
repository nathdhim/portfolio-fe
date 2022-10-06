import Layout from "../component/Layout";
import CaseCard from "../component/CaseCard";
import {FooterSocial} from "../component/Footer";

export default function Work() {
  return (
    <Layout>
      <section className="work-hero">
        <div className="content-container">
          <div className="hero-showcase">
            <CaseCard to="/cases/case1"/>
            <CaseCard to="/cases/case1"/>
            <CaseCard to="/cases/case1"/>
            <CaseCard to="/cases/case1"/>
            <CaseCard to="/cases/case1"/>
          </div>
        </div>
      </section>
      <FooterSocial/>
    </Layout>
  );
}
