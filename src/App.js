import {Switch, Route, Link} from 'react-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link></Link></li>
        </ul>
      </nav>
      <Switch>
        <Route>
          <Home></Home>
        </Route>
      </Switch>
  
    </div>
  );
}

export default App;
