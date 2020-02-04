import React from 'react'
import Product from './Product'
import './Home.css'

const Home = () => {
    return (
        <div className="products">
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Home
