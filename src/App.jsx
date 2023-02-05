import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}
