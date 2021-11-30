import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import List from './components/Todo/List';
import Form from './components/Todo/Form';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/About"><About/></Route>
        <Route path="/List"><List/></Route>
        <Route path="/Form"><Form/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
