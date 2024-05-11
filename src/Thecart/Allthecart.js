import React from 'react'
import Navbar from '../Home/Navbar'
import { CartProvider,useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      totalItems,
      cartTotal,
    } = useCart();
  
    if (isEmpty){
      return(
        <div>
            <h3 className="text-center">Your cart is empty</h3>;
        </div>
      ) 
    } 
  
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-center">Cart ({totalUniqueItems})</h1>
         <button className="btn btn-danger ml-2" onClick={()=>emptyCart()}>Delete All Item</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
            <table className="table table-dark text-center">
         <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Operation</th>
          </tr>
         </thead>
         <tbody>
         {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.images[0]} style={{width:"70px"}}></img>
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price*item.quantity}</td>
              <td>
              <button 
              className="btn btn-warning"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
              className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>----------------</td>
            <td>{totalItems}</td>
            <td>{cartTotal}</td>
            <td>
              <Link to="/shop" className="btn btn-primary" >Continue shopping</Link>
            </td>
          </tr>
         </tbody>
        </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
function Allthecart() {
  return (
    <CartProvider>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Cart/>

    </CartProvider>
  )
}

export default Allthecart