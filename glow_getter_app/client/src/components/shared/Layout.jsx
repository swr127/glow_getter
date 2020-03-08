import React from 'react'
import Header from '../routes/Header'
import Footer from '../routes/Footer'

const Layout = (props) =>
{
    return (
        <React.Fragment>
            <Header />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout
