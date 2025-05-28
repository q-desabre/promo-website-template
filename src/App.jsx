import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />

      <Hero />
      <About />
      <Features />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
