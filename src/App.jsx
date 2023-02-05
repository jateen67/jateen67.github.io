import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function App() {
  useEffect(() => {
    document.title = "Jatin Kalsi";
  });
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
