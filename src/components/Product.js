import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div class="card justify-content-center" style={{width: '28rem'}}>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="mal" />
            <div class="card-body">
                <h5 class="card-title">Head Phones</h5>
                <p class="card-text">Cool headset to buy and play your favourite music, order now!!</p>
                <Link to="/cart" class="btn btn-primary">Add to Cart</Link>
            </div>
        </div>
    )
}

export default Product
