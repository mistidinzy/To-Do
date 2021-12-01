import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/heeder/Header';
import About from './components/About/About';
import List from './components/toodledo/List';
import TaskForm from './components/toodledo/Form';
import Footer from './components/fooooter/littlefoot'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = [
  { id: 1, name: 'Declutter' },
  { id: 2, name: 'Sweep' },
  { id: 3, name: 'Vacuum' },
  { id: 4, name: 'Mop' },
];

let nextId = 5;

function App() {
  const [tasks, setTasks] = useState(data);
  
  console.log(tasks);
  
  function handleSave(formData) {
    const newTask = {
      ...formData,
      id: nextId++,
    };
    const newTasks = [
      ...tasks,
      newTask,
    ]
    setTasks(newTasks);

    console.log(newTasks);
  }
  
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
        <Route path="/List">
          <List listData={tasks} title="To-Do"/>
        </Route>
        <Route path="/Form">
          <TaskForm onSave={handleSave}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
