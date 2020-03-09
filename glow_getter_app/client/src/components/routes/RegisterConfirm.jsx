import React from 'react'
import { Link } from 'react-router-dom'

function RegisterConfirm() {
    return (
        <div className="Register-Confirm">
            <h1>Welcome!</h1>
            <Link to="/login">
                <button type="button">login></button>
            </Link>
        </div>
    )
}

export default RegisterConfirm