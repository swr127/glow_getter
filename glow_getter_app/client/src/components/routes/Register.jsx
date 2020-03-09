import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

function Register(props) {
    return (
        <Layout>
            <div className="Register">
                <h3>SIGN UP FOR AN ACCOUNT</h3>
                {/* <p> placeholder for marketing text</p> */}
                <form onSubmit={props.handleRegister} >
                        <div>Username: </div>
                            <input 
                                required
                                placeholder="Create new username"
                                name="username"
                                type="text"
                                value={props.formData.username}
                                onChange={props.handleChange}
                            />
                        <div>Email: </div>
                            <input 
                                required
                                placeholder="Enter your email address"
                                name="email"
                                type="text"
                                value={props.formData.email}
                                onChange={props.handleChange}
                            />
                        <div>Password: </div>
                            <input
                                required
                                placeholder="Create password (must be 6 characters)"
                                name="password"
                                type="password"
                                value={props.formData.password}
                                onChange={props.handleChange}
                            /> <br />
                        {/* <Link to="/register/welcome"> */}
                            <button>
                                signup
                            </button>
                        {/* </Link> */}
                </form>
            </div>
        </Layout>
    )
}
export default Register