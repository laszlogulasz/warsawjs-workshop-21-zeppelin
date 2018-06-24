import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import {Switch, Route, Redirect} from 'react-router-dom';
import store, {history} from './store'
import Home from './pages/Home'
import Posts from './pages/Posts'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path='/'
            render={props => localStorage.getItem('warsawjs-username')
            ?  <Redirect to="/posts" />
            : <Home {...props} />
      }
    />
  <Route path='/posts' component={Posts}/>
        <Route render={() => 'not found!'}/>

        </Switch>
      </ConnectedRouter>
    </Provider>);
  }
}

export default App;
