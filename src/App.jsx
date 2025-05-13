import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Features />
    </div>
  );
}

export default App;
