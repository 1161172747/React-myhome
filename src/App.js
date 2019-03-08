import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Main from './moudel/main'
class App extends Component {
  render() {
    return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Login}></Route>
         <Route path="/home" component={Main}></Route>
       </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
