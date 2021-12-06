import { Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer'
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
