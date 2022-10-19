import { Layout } from "../component/Layout";
import { ProductCard } from "../component/Card";
import Image from "next/future/image";
import { FooterDefault } from "../component/Footer";
import Link from "next/link";
import { fetcher } from "../lib/api";

function resource({showProducts}) {
  return (
    <Layout>
      <section className="resource-hero column">
        <div className="content-container column">
          <div className="hero-text row">
          <h1>Helping designers & <br/> startups to design faster</h1>
            <div className="left-container row">
              <Image
                alt="image"
                className="img"
                src="/icon/dot.svg"
                width={16}
                height={16}
              />
              <p className="desc">
                Note : All the design resources is 100% free.
              </p>
            </div>
          </div>
          <div className="product-grid">
          {showProducts &&
              showProducts.data.map((showProduct) => {
                return (
                  <ProductCard showProduct={showProduct} key={showProduct}/>
                );
              })}
          </div>
        </div>
      </section>
      <FooterDefault />
    </Layout>
  );
}

export async function getStaticProps() {
  const productRes = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products`);
  console.log(productRes);
  return {
    props: {
      showProducts: productRes,
      fallback: false,
    },
    revalidate: 10,
  };
}

export default resource
