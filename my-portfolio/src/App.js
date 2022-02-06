import './App.css';
import {Switch, Route, useLocation} from 'react-router-dom'
import About from './components/About/About';
import Header from './components/Header/Header';
import Init from './components/Init/Init';
import Skills from './components/Skills/Skills';
import {AnimatePresence} from 'framer-motion';

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
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
