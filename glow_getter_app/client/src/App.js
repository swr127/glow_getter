import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { loginUser, registerUser, verifyUser, addProductToCart } from './userAuth'
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
      const currentUser = await verifyUser()
      if (currentUser) {
        this.setState({ currentUser })
      }

    } catch (error) {
      console.log(error)
    }
  }

  // -------------- START SHOPPING CART ------------------

  handleAddCart = async (event) => {
    event.preventDefault()
    const product = event.target.name
    const response = await addProductToCart(product)
    console.log(response)
  }

  redirectAddCart = async () => {
    this.props.history.push("/login")
  }

  // -------------- END SHOPPING CART ------------------

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
    this.props.history.push("/")
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
            <Route exact path='/shop' render={() => (
              <Shop 
                currentUser={this.state.currentUser}
                addCart={this.handleAddCart} 
                redirect={this.redirectAddCart}
              /> )}
            />
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