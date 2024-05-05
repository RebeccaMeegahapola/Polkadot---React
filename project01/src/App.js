import './App.css';
import Main from './Main';
import Blog from './Blog';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>    
          <Route path='/' exact component={Main}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route path='/main' component={Main}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
