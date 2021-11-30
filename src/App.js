import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
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
