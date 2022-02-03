import './App.css';
import {Switch, Route} from 'react-router-dom'
import About from './components/About/About';
import Header from './components/Header/Header';
import Init from './components/Init/Init';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header scroll='no'/>
          <Init scroll='no'/>
        </Route>
        <Route exact path='/about'>
          <About /> 
        </Route>
        <Route exact path='/skills'>
          <Skills />  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
