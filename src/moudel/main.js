import React, { Component } from 'react'
import { Route, Link,Switch } from 'react-router-dom'
import {Grid} from 'semantic-ui-react'

import './main.css'

import Home from './home/home';
import Info from './info/info';
import Chat from './chat/chat';
import My from './my/my';


function Menu(props) {
  let {to,mname,icon} = props;
  return (
     <Route path={to} children={({match})=> {
       let iconClass = 'iconfont icon-'+icon;
       iconClass = match? iconClass + ' active':iconClass;
       return (
         <Link to={to}>
          <div className='placeholder'>
            <i className={iconClass}></i>
            <div className={match?'active':''}>{mname}</div>
          </div>
         </Link>
       )
     }} />
  )
}

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-content">
          <Switch>
            <Route path="/home/main" component={Home} />
            <Route path="/home/info" component={Info} />
            <Route path="/home/chat" component={Chat} />
            <Route path="/home/my" component={My} />
          </Switch>
        </div>
        <div className="main-menu">
          <Grid columns={4} divided>
            <Grid.Row>
              <Grid.Column>
                <Menu to="/home/main" mname="主页" icon="all" />
              </Grid.Column>
              <Grid.Column>
                <Menu to="/home/info" mname="咨讯"  icon='search' />
              </Grid.Column>
              <Grid.Column>
                <Menu to="/home/chat" mname="微聊" icon="atm" />
              </Grid.Column>
              <Grid.Column>
                <Menu to="/home/my" mname="我的" icon="account" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
export default Main
