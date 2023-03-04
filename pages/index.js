

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills.js';
import Projects from './components/Projects';
import Contact_Form from './components/Contact_Form';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact_Form/>
      <Footer/>
    </div>
  );
}

export default App;
