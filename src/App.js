import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css';
import RouteExampleOne from './pages/RouteExampleOnePage'
import RouteExampleTwo from './pages/RouteExampleTwoPage'
import HomeComponent from './components/HomeComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/example/one/route'> Example Route One </Link>
            </li>
            <li>
              <Link to='/example/two/route'> Example Route Two </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/example/one/route' component={RouteExampleOne} />
            <Route exact path='/example/two/route' component={RouteExampleTwo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
