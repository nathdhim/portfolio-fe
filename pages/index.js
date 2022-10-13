import {Layout} from "../component/Layout";
import {CaseCard} from "../component/Card";
import {FooterDefault} from "../component/Footer";

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
        <FooterDefault/>
      </section>
      
    </Layout>
  );
}
