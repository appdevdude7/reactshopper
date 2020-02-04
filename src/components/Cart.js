import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div class="container">
  <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style={{width:"50%"}}>Product</th>
        <th style={{width:"10%"}}>Price</th>
        <th style={{width:"8%"}}>Quantity</th>
        <th style={{width:"22%"}} class="text-center">Subtotal</th>
        <th style={{width:"10%"}}></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120&q=150" alt="..." class="img-responsive" /></div>
            <div class="col-sm-10">
              <h4 class="ml-5">Head Phones</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p> */}
            </div>
          </div>
        </td>
        <td data-th="Price">$5.11</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" value="1" />
        </td>
        <td data-th="Subtotal" class="text-center">$5.11</td>
        <td class="actions" data-th="">
          <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
          <button class="btn btn-danger btn-sm ml-3"><i class="fa fa-trash-o"></i></button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="visible-xs">
        <td class="text-center"><strong>Total $ 5.11</strong></td>
      </tr>
      <tr>
        <td><Link to="/product" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</Link></td>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total $ 5.11</strong></td>
        <td><Link to="/" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></Link></td>
      </tr>
    </tfoot>
  </table>
</div>
    )
}

export default Cart
