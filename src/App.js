import logo from './logo.svg';
import './App.css';
import Hero from "./compos/Hero/Hero"
import Nav from "./compos/Nav/Nav"
import About from "./compos/About/About"
import Services from "./compos/Services/Services"
import Contact from "./compos/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
