import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import Header from './components/routes/Header'
import Home from './components/routes/Home'
import Footer from './components/routes/Footer'
import Shop from './components/routes/Shop'
import Login from './components/routes/Login'
import Register from './components/routes/Register'
import Cart from './components/routes/Cart'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userProducts: []
    }
  }

  // Calling getUserProducts() to retrieve all products that user added to cart
  // async componentDidMount() {
  //   try {
  //     this.getUserProducts()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // } 

  // // Make Axios call to retrieve all user products from back-end
  // async getUserProducts(id) {
  //   try {
  //     const response = await axios (`${apiUrl}/users/${id}`)
  //     this.setState({ userProducts: response.data.user.products })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // Create routes for home, shop, login, register, and cart
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=> (
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          )}/>
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    )
  }
}

export default App
