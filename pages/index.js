import { Layout } from "../component/Layout";
import { CaseCard } from "../component/Card";
import { FooterDefault } from "../component/Footer";
import { fetcher } from "../lib/api";
import Link from "next/link";

function Work({showcases}) {
  return (
    <Layout>
      <section className="work-hero">
        <div className="content-container">
          <div className="hero-showcase">
            {showcases &&
              showcases.data.map((showcase) => {
                return (
                  <Link href={`cases/` + (showcase.id)} key={showcase.id}>
                    <a className="card-wrapper">
                    <CaseCard showcase={showcase} key={showcase}/>
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
        <FooterDefault />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const showcases = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases`)

  return {
    props: { showcases },
    revalidate: 10,
  }
}
export default Work