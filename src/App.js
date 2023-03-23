import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
