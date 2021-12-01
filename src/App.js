import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import List from './components/ToDo/List';
import TaskForm from './components/ToDo/Form';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const data = [
  { id: 1, name: 'Declutter', assignee: 'Misti', difficulty: 1, isComplete: false },
  { id: 2, name: 'Sweep', assignee: 'Misti', difficulty: 1, isComplete: true },
  { id: 3, name: 'Vacuum', assignee: 'Misti', difficulty: 1, isComplete: false },
  { id: 4, name: 'Mop', assignee: 'Misti', difficulty: 1, isComplete: false },
];

let nextId = 5;

function App() {
  const [tasks, setTasks] = useState(data);
  
  console.log('Tasks = ', tasks);
  
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

    console.log('New Tasks = ', newTasks);
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
          <List listData={tasks} listTitle="To-Do"/>
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
