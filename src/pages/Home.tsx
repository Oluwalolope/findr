import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import { StoreOwners } from "../components/StoreOwners";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <StoreOwners />
      <Footer />
    </>
  );
};

export default HomePage;
