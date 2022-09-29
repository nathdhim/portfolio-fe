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
            <p className="desc text-center" >A passionate and creative designer who can easily understand the your wish and consistently delivers outstanding quality product.</p>
          </div>

          <div className="hero-showcase">
            <ClientCard page='/case1' clientname='Quibee.io' category='Beautycare' year='2022' source="https://res.cloudinary.com/dtwh4nrmh/video/upload/v1664426674/Cross_Direction_8_8_Screens_1920x1080_FullHD_eiiw5d.mp4"/>
            <ClientCard page='/case2' clientname='Client Name' category='Blockchain' year='2022' source="https://res.cloudinary.com/dtwh4nrmh/video/upload/v1664426674/Cross_Direction_8_8_Screens_1920x1080_FullHD_eiiw5d.mp4"/>
            <ClientCard page='/case3' clientname='Client Name' category='Blockchain' year='2022' source="https://res.cloudinary.com/dtwh4nrmh/video/upload/v1664426674/Cross_Direction_8_8_Screens_1920x1080_FullHD_eiiw5d.mp4"/>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
