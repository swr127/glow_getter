import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Axios from 'axios'
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
      products: [],
      userProducts: []
    }
  }

  async componentDidMount() {
    try {
      // Make Axios call to retrieve all products from back-end
      const response = await Axios (`${apiUrl}/products`)
      this.setState({ products: response.data.products })

      // Calling getUserProducts() to retrieve all products that user added to cart
      this.getUserProducts()
    } catch (error) {
      console.log(error)
    }
  } 

  // Make Axios call to retrieve all user products from back-end
  async getUserProducts(id) {
    try {
      const responseTwo = await Axios (`${apiUrl}/users/${id}`)
      this.setState({ userProducts: responseTwo.data.user.products })
    } catch (error) {
      console.log(error)
    }
  }
  
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
          <Route exact path='/viewmycart' component={Cart} />
          </Switch>
      </div>
    )
  }
}

export default App
