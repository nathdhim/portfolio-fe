import Head from "next/head";
import NavigationBar from "./Navbar";


export default function Layout(props) {
  return (
    <div id="smooth-wrapper">
      <div className="container" id="smooth-content">
        <Head>
          <title>Dhimas Putra | Expert Product Designer</title>
        </Head>
        <NavigationBar />
        {props.children}
      </div>
    </div>
  );
}
