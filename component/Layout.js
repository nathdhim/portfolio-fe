import Head from "next/head";
import Navbar from "./Navbar";


export default function Layout(props) {
  return (
    <div id="smooth-wrapper">
      <div className="container" id="smooth-content">
        <Head>
          <title>Dhimasputra.com | Expert Product Designer</title>
        </Head>
        <Navbar />
        {props.children}
      </div>
    </div>
  );
}
