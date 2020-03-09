import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import { loginUser, registerUser, verifyUser } from './userAuth'
import Layout from './components/shared/Layout'
import Home from './components/routes/Home'
import Shop from './components/routes/Shop'
import Login from './components/routes/Login'
import LoginConfirm from './components/routes/LoginConfirm'
import Register from './components/routes/Register'
import RegisterConfirm from './components/routes/RegisterConfirm'
import Cart from './components/routes/Cart'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userProducts: [], 

      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    }
  }

  async componentDidMount() {
    try {
      // Calling getUserProducts()
      // this.getUserProducts()
        // How do I connect getUserProducts with currentUser?

      // Retreiving currentUser 
      const currentUser = await verifyUser()
      if (currentUser) {
        this.setState({ currentUser })
      }

    } catch (error) {
      console.log(error)
    }
  }

  // getUserProducts = async (id) => {
  //   try {
  //     const response = await axios (`${apiUrl}/users/${id}`)
  //     this.setState({ userProducts: response.data.user.products })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // -------------- START USER AUTH ------------------

  handleLogin = async (event) => {
    event.preventDefault()
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser })
    this.props.history.push("/login/welcome")
  }

  handleRegister = async (event) => {
    event.preventDefault()
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({ currentUser })
    this.props.history.push("/register/welcome")
  }

  handleLogout = () => {
    localStorage.removeItem("jwt")
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }
  // -------------- END USER AUTH ------------------

  render() {
    return (
      <div className="App">
        <Layout 
          currentUser={this.state.currentUser}
          logout={this.handleLogout}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/login' render={() => (
              <Login 
                handleLogin={this.handleLogin}
                handleLoginButton={this.handleLoginButton}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} 
              /> )} 
            />
            <Route exact path='/login/welcome' render={() => (
              <LoginConfirm 
                currentUser={this.state.currentUser} 
              /> )}
            /> 
            <Route exact path='/register' render={() => (
              <Register 
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              /> )}
            />
            <Route exact path='/register/welcome' component={RegisterConfirm} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App)