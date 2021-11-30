import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/About"><About/></Route>
      </Switch>
    </div>
  );
}

export default App;
