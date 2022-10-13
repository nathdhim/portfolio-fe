import { Layout } from "../component/Layout";
import {ProductCard} from "../component/Card";
import Image from "next/future/image";
import { FooterDefault } from "../component/Footer";


export default function resource() {
  
  return (
    <Layout>
      <section className="resource-hero column">
        <div className="content-container column">
          <div className="hero-text row">
            <div className="text-wrapper column">
              <h1>Helping designers &</h1>
              <h1>startups to design faster</h1>
            </div>
            <div className="left-container row">
            <Image className="img" src="/icon/dot.svg" width={16} height={16} />
              <p className="desc">Note : All the design resources is 100% free.</p>
            </div>
          </div>
          <div className="product-grid">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <FooterDefault/>
    </Layout>
    
  );
}
