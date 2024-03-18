
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'


const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  return (
    
   <div className="cartitems">
    <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
    </div>
    <hr />
{all_product.map((e) => {
    if (cartItems[e.id] > 0) 
        return (
            <div>
                <div className="cartitems-format cartitems-format-main" key={e.id}>
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>Nrs. {e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>Nrs. {e.new_price * cartItems[e.id]}</p>
                    <img className='cart-items-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                </div>
                <hr/>
            </div>
        ); 
    return null;       
})}

<div className="cart-items-down">
    <div className="cartitems-total">
    <h1>Cart Totals</h1>

    <div>
        <div className="cartitems-total-item">
            <p>Sub Total</p>
            <p>Nrs. {getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
            <p>Delivery fee</p>
            <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>Nrs. {getTotalCartAmount()}</h3>
        </div>
    </div>
    <button>Proceed to checkout</button>
    </div>
    <div className="cartitems-promocode">
        <p>Enter your promo code</p>
        <div className="cartitem-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
        </div>
    </div>
</div>

   </div>
  )
}

export default CartItems


