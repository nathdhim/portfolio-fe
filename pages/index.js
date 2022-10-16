import {Layout} from "../component/Layout";
import {CaseCard} from "../component/Card";
import {FooterDefault} from "../component/Footer";
import {useState, useEffect} from "react";
import { GET_ALL_CASES } from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import Link from "next/link";

export default function Work({ showcase }) {
  
  return (
    <Layout>
      <section className="work-hero">
        <div className="content-container">
          <div className="hero-showcase">
          {showcase.map((val, i) => {
        return (
          <>
          <Link key={i} href={val.attributes.urlSlug}>
            <a className="card-wrapper"><CaseCard val={val} key={i}/></a>
          
          </Link>
          </>
        )
      })}
          </div>
        </div>
        <FooterDefault/>
      </section>
      
    </Layout>
  );
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_CASES
  })

  return {
    props: {
      showcase: data.cases.data
    }
  }
}
