import React, { Component } from 'react'
import { viewCart } from '../../userAuth'

// Pass in userProducts array from App
// Map through products and render images 
// Add remove from cart functionality 

class Cart extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        products: []
      }
    }

    async componentDidMount() {
        try {
          const response = await viewCart()
          this.setState({ products: response })
          console.log(response)

        } catch (error) {
          console.log(error)
        }
    } 

    render() {
        const products = this.state.products.map(product => (
          <div key={product.id}>
                <img src={product.img} width='200px' height='200px' alt="product" /> <br />
                {product.name} <br/>
                ${product.price} <br />
            
              {this.props.currentUser ?
                
                <button name={product.id} onClick={this.props.addCart}>Add to Cart</button> :
                <button onClick={this.props.redirect}>Add to Cart</button>
              }
            </div>
        ))
        return (
          <div className="Shop">
              {products}
          </div>
        )
    }
}

export default Cart