import React from 'react'

function Login(props) {
    return (
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

                        <button>login</button>
                </form>
            </div>
    )
}
export default Login