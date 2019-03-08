import React, { Component } from 'react'
import { Button, Icon, Form, Divider } from 'semantic-ui-react'
import './Login.css'
import axios from "axios"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handeUsername = event => {
    this.setState({
      username: event.target.value
    })
  }
  handePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  submit = async (event) => {
    let data = await axios.post('http://47.96.21.88:8086/users/login',{
      uname:this.state.username,
      pwd:this.state.password
    })
    console.log(data)
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-logo">
          <Icon name="home" size="massive" color="orange" />
        </div>
        <div className="login-form">
          <Form>
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              value={this.state.username}
              onChange={this.handeUsername}
              placeholder="请输入用户名..."
            />
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="password"
              value={this.state.password}
              onChange={this.handePassword}
              placeholder="请输入密码..."
            />
            <Button onClick={this.submit} fluid color="green" >登录</Button>
          </Form>
          <Divider horizontal>...</Divider>
        </div>
        <div className="login-third">
          <Icon name="weixin" color="black" size="big" />
          <Icon name="qq" color="black" size="big" />
        </div>
      </div>
    )
  }
}

export default Login
