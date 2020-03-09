import React from 'react'
import { NavLink } from 'react-router-dom'

// Change to class component for React Hamburger Menu
function Header(props) {
    return (
        <div className="Header">
            <h1>GLOW GETTER</h1>
            <div>
               {props.currentUser
                
                ? 

                <div>
                    {props.currentUser.username}
                    <button onClick={props.logout}>Logout</button> 

                    <br />

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/cart">View My Cart</NavLink>
                </div>
                
                :

                <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                </div>

                }             
            </div>
        </div>
    )
}

export default Header