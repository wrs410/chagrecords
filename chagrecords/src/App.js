
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
  Link
} from 'react-router-dom';


import './App.css';
import Wrapper from './components/Wrapper.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" element ={<Wrapper/>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
