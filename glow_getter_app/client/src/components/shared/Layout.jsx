import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    nav = React.createRef()

    handleClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            }
        })
    }

    handleClickOutside = (event) => {
        if (this.nav.current && !this.nav.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside)
    }
    
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside)
    }

    render() {
    return (
        <div className="Layout">
            <div className="Header">
                <nav className="Nav" ref={this.nav}>
                    <NavLink className="Logo" to="/" style={{ textDecoration: 'none' }}>GG</NavLink>
                    <button className="Hamburger-Button" type="button" onClick={this.handleClick}>☰</button>

                    {this.props.currentUser ?
                        <div className="Logged-In">
                            Hello, {this.props.currentUser.username}!
                            <button onClick={this.props.logout}>logout</button> 
                        
                            {this.state.open && (
                            <ul className="Hamburger-Dropdown-In">
                                <NavLink to="/"><li>Home</li></NavLink>
                                <NavLink to="/shop"><li>Shop</li></NavLink>
                                <NavLink to="/cart"><li>My Cart</li></NavLink>
                            </ul>
                             )}
                        </div>
                    :
                        <div className="Logged-Out">
                            {this.state.open && (
                            <ul className="Hamburger-Dropdown-Out">
                                <NavLink to="/"><li>Home</li></NavLink>
                                <NavLink to="/shop"><li>Shop</li></NavLink>
                                <NavLink to="/login"><li>Login</li></NavLink>
                                <NavLink to="/register"><li>Register</li></NavLink>
                            </ul>
                             )}
                        </div>
                    }
                </nav>
                
                <div className="Title">
                    <Link className="Title-Text" to="/" style={{ textDecoration: 'none' }}>GLOW GETTER</Link>
                </div>
                <br />
            </div>

            {this.props.children}

            <div className="Footer">
                <hr />
                <p>&copy; 2020 SAMANTHA RUSSELL  |  <a href="https://git.generalassemb.ly/swr127">GITHUB</a>             
                <a href="https://www.linkedin.com/in/swr127/">LINKEDIN</a></p>
            </div>
        </div>
    )}
}

export default Layout