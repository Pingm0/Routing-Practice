import { Router } from '@reach/router';
import './App.css';
import Word from './components/Word';
import CWord from './components/CWord'
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home   path="/home"/>
        <Number path="/number/:num"/>
        <Word   path="/word/:word"/>
        <CWord  path="/cword/:word/:fColor/:bColor" />
      </Router>
    </div>
  );
}

export default App;
