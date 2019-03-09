import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Main from './moudel/main'
import AuthCheck from './auth'
import './assets/fonts/iconfont.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <AuthCheck path="/home" component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
