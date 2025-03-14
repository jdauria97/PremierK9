import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Carousel />
        <About />
        <Services />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
