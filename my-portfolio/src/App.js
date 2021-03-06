import './App.css';
import {Switch, Route, useLocation} from 'react-router-dom'
import About from './components/About/About';
import Header from './components/Header/Header';
import Init from './components/Init/Init';
import Skills from './components/Skills/Skills';
import {AnimatePresence} from 'framer-motion';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Error from './components/ErrorPage/Error';
import wave from './assets/wave2.png'
import waveTop from './assets/wave3.png'

function App () {

  const location = useLocation();

  return (
    <div className="App">
      <Route path='/'>
          <Header />
        </Route>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/'>
              <Init />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/skills'>
              <Skills /> 
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
            <Route exact path='/hire'>
              <Contact />
            </Route>
            <Route path="*">
            <Error />
          </Route>
          </Switch>
        </AnimatePresence>
        <img src={wave} alt='wave' className='wave-bottom' />
        <img src={waveTop} alt='wave' className='wave-top' />
    </div>
  );
}

export default App;
