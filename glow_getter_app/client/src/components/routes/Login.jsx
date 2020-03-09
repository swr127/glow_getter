import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

function Login(props) {
    return (
        <Layout>
            <div className="Login">
                <h3>LOGIN TO YOUR ACCOUNT</h3>
                {/* <img src= find admin icon alt="user"/> */}
                <form onSubmit={props.handleLogin} >
                        <div>Username: </div>
                            <input 
                                required
                                placeholder="Enter your username"
                                name="username"
                                type="text"
                                value={props.formData.username}
                                onChange={props.handleChange}
                            />
                      
                        <div>Password: </div>
                            <input
                                required
                                placeholder="Enter your password (must be 6 characters)"
                                name="password"
                                type="password"
                                value={props.formData.password}
                                onChange={props.handleChange}
                            /> <br />
                        <Link to="/login/welcomeback">
                            <button type="button">
                                Login
                            </button>
                        </Link>
                </form>
            </div>
        </Layout>
    )
}
export default Login