import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default App;
