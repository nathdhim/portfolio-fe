import Layout from "../component/Layout";
import ClientCard from "../component/ClientCard";


export default function work() {
  return (
    <Layout>
      <section className="work-hero">
        <div className="content-container">
          <div className="hero-text">
            <h1>My Latest Burgers</h1>
            <h1 className="total" >6 Projects</h1>
          </div>
          <div className="work-container">
            <div className="work-item-container">
              <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
               <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
               <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
            </div>
            <div className="work-item-container">
              <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
               <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
               <ClientCard clientname='Client Name'
              category='Blockchain'
              year='2022'/>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="content-container">
          <p>© 2022 Dhimas Putra. All rights reserved.</p>
          <div className="social-link">
            <a className="nav-item">Email</a>
            <a className="nav-item">Upwork</a>
            <a className="nav-item">Dribbble</a>
            <a className="nav-item">Linkedin</a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
