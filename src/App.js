import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AnimatedHam from "./components/AnimatedHam";
import Typewriter from "./components/Typewriter";
import TypeWriterCss from "./components/TypeWriterCss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedHam />
      <Typewriter text="Hi, I am Disu" />
      <TypeWriterCss />
    </div>
  );
}

export default App;
