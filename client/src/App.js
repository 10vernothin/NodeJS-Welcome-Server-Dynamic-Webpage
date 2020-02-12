import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';

class App extends Component {
  render() {
		const App = () => (
		  <div>
		  <Router>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path='/list' component={List}/>
			  <Route path='/login' component={Login}/>
			</Switch>
		  </Router>
		  </div>
		)
		return (
		  <Router>
		  <Switch>
			<App/>
		  </Switch>
		  </Router>
		);
	}
}

export default App;