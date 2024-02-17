import NavBar from "./components/ui/NavBar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/ui/Footer";
import ConstructionNote from "./components/ui/ConstructionNote";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <ConstructionNote />
    </>
  );
};

export default App;
