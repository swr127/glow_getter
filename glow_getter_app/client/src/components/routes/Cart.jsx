import React, { Component } from 'react'

// Pass in userProducts array from App
// Map through products and render images 
// Add remove from cart functionality 

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="Cart">
                Cart
            </div>
        )
    }
}

export default Cart