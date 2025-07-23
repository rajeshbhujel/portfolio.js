import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Info />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
