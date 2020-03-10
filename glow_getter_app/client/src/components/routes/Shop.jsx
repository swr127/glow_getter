import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Shop extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        products: []
      }
    }

    async componentDidMount() {
        try {
          const response = await axios (`${apiUrl}/products`)
          this.setState({ products: response.data })
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
                {product.price} <br />
                <button onClick={this.props.handleChange}>Add to Cart</button>
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