import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Experience from "./components/experience";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    Aos.init({
      duration: 1000,
      once: true,
      disable: prefersReducedMotion,
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Navbar />
          <Header />
          <Experience />
          <Tools />
          <Projects />
          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
