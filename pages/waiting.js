import {Layout} from "../component/Layout";


export default function waiting() {
  return (
    <Layout>
      <section className="waiting-hero column">
        <div className="content-container column">
        <div className="hero-text">
        <h1 className="text-center" >This page is under development :)</h1>
        <p className="desc text-center" >Keep Waiting, I’ll launch the feature ASAP.</p>
        </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}