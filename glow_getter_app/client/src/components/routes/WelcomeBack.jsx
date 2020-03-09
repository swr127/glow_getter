import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

function WelcomeBack() {
    return (
        <Layout>
            <div className="WelcomeBack">
                <h1>Welcome back!</h1>
                <Link to="/shop">
                    <button type="button">get shopping>></button>
                </Link>
            </div>
        </Layout>
    )
}

export default WelcomeBack