import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';


import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import BlogLatest from '../components/blogLatest'
import HotDeals from '../components/hotDeals'
import ShoppingPlatforms from '../components/shoppingPlatforms'
 
const Shop = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <h1>Shop</h1>

            <Navigation />
            <Sidebar />
            <Footer />
        </React.Fragment>
    )
}

export default Shop;