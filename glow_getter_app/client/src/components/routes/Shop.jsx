import React, {Component} from 'react'
import Axios from 'axios'
import apiUrl from '../../apiConfig'
import ShopProductCard from './ShopProductCard'

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

    renderProducts = () => {
        if (this.state.products) {
        return this.state.products.map((index, product) => {
            return <ShopProductCard 
                index={index} 
                product={product}/>
        })
    }
    }
    
    render() {
        return (
            <div className="Shop">
                Shop
                {this.renderProducts()}
            </div>
        )
    }
}

export default Shop