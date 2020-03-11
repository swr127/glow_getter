import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { viewCart } from '../../apiConfig'

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
          <div className="Product-Card" key={product.id}>
            <div className="Product-Image">
                <div className="Product-Front"><img src={product.img} width='200px' height='200px' alt="product" /></div>
                <div className="Product-Back"><img src="https://i.imgur.com/xG0rVGt.jpg" width='200px' height='200px' alt="product" /></div>
            </div>
                
            <h3 className="Product-Name">{product.name}</h3>
            <h4 className="Product-Price">${product.price}</h4>
            <button name={product.id} onClick={this.props.handleCart}>Remove from Cart</button>
            
          </div>
        ))
        return (
          <div className="Cart">
            <div className="Cart-Instructions">
              <h1>Ready to checkout?</h1>
              <h4>Place instructions here</h4>
              <ul>
                <li>Step One: text text text</li>
                <li>Step Two: text text text</li>
                <li>Step Three: text text text</li>
                <li>Step Four: text text text</li>
                <li>Step Five: text text text</li>
                <li>Step Six: text text text</li>
              </ul>
              <img src="https://i.imgur.com/beGText.jpg" width='550px' height='350px' alt="girls" /> <br />
              <p>#glowgetters via Instagram</p>
            </div>
            <div className="Cart-Box">
              { products.length > 0 ?
                <div className="Cart-Products"> {products} </div> :
                <div className="Cart-Empty">
                  <h1>You're cart is empty!</h1>
                  <Link to="/shop">
                    <button type="button">get shopping>></button>
                  </Link>
                </div>
              }
            </div>
          </div>
        )
    }
}

export default Cart