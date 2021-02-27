import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
