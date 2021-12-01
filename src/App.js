import { Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App()
{
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
