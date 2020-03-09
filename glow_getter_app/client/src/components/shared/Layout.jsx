import React from 'react'
import { NavLink } from 'react-router-dom'

function Layout(props) {
    return (
        <div className="Layout">
            <div className="Header">
                <h1>GLOW GETTER</h1>
                <div>
                    {props.currentUser ? 
                    <div>
                        {props.currentUser.username}
                        <button onClick={props.logout}>Logout</button> 

                        <br />

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/cart">View My Cart</NavLink>
                    </div> :

                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </div> }             
                </div>
            </div>

            {props.children}

            <div className="Footer">
                <p>&copy; SAMANTHA RUSSELL</p>
            </div>
        </div>
    )
}

export default Layout