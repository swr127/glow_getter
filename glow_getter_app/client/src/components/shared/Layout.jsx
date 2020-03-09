import React from 'react'
import Header from '../routes/Header'
import Footer from '../routes/Footer'

function Layout(props) {
    return (
        <div className="Layout">
            <Header
                currentUser={props.currentUser}
                logout={props.handleLogout} />

                {props.children}

            <Footer />
        </div>
    )
}

export default Layout