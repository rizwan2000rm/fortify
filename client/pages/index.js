import Head from "next/head";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Feature />
        <Stats />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
