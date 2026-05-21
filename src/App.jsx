import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Experience from "./components/experience";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
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
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
