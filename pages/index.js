import Layout from "../component/Layout";
import plus from "../assets/img/plus.svg";
import Image from "next/dist/client/image";
import ClientCard from "../component/ClientCard";

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <div className="content-container">
          <div className="hero-text">
            <Image src={plus} alt="" />
            <h1 className="text-center" >Just Crazy Product Designer</h1>
            <p className="desc text-center" >Magnam amet iste quidem magnam voluptatibus. Qui veniam debitis minima necessitatibus est minus dolores.</p>
          </div>

          <div className="hero-showcase">
            <ClientCard page='/case1' clientname='Client Name' category='Blockchain' year='2022' />
            <ClientCard page='/case2' clientname='Client Name' category='Blockchain' year='2022' />
            <ClientCard page='/case3' clientname='Client Name' category='Blockchain' year='2022' />
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
