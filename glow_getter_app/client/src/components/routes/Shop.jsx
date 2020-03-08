import React, {Component} from 'react'
import Axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Shop extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        products: []
      }
    }

    // Make Axios call to retrieve all products from back-end
    async componentDidMount() {
        try {
          const response = await Axios (`${apiUrl}/products`)
          this.setState({ products: response.data })
          console.log(response)

        } catch (error) {
          console.log(error)
        }
    } 
    
    // Create add to cart button event handler
    // Associating a product with a user (front-end and back-end)
    // Lifting state to App and into Cart
    // handleClick

    render() {
        const products = this.state.products.map(product => (
            <div key={product.id}>
                <img src={product.img} width='200px' height='200px' alt="product image" /> <br />
                {product.name} <br/>
                {product.price} <br />
                <button>Add to Cart</button>
            </div>
        ))
        return (
            <Layout>
                <div className="Shop">
                    {products}
                </div>
            </Layout>
        )
    }
}

export default Shop
