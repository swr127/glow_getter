import React from 'react'
import { Link } from 'react-router-dom'

function LoginConfirm(props) {
    return (
        <div className="Login-Confirm">
            <h1>Welcome back {props.currentUser.username}!</h1>
            <Link to="/shop">
                <button type="button">get shopping>></button>
            </Link>
        </div>
    )
}

export default LoginConfirm