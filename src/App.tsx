import About from "./modules/About";
import AboutMe from "./modules/AboutMe";
import Contact from "./modules/Contact";
import Experience from "./modules/Experience";
import { Footer, Header } from "./modules/Layout";
import LazyProjects from "./modules/Projects";
import Skills from "./modules/skills";

function App() {
  return (
    <div className="bg-background text-text font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <About />
        <Skills />
      </main>
      <Experience />
      <main className="container mx-auto px-4">
        <AboutMe />
      </main>
      <LazyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
