import React, { Component } from 'react'
import { viewProducts } from '../../apiConfig'

class Shop extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        products: []
      }
    }

    async componentDidMount() {
        try {
          const response = await viewProducts()
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
                
                <button name={product.id} onClick={this.props.handleCart}>Add to Cart</button> :
                <button onClick={this.props.handleRedirect}>Add to Cart</button>
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

export default Shop