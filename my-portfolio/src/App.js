import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Init from './components/Init/Init';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Init />
      <About />
      <Skills />
    </div>
  );
}

export default App;
