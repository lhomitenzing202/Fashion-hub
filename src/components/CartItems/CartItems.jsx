

import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'


const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    
   <div className="cartitems">
    <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e) => {
    if (cartItems[e.id] > 0) 
        return (
            <div className="cartitems-format" key={e.id}>
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>Nrs{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
        );        
    
})}  
   </div>
  )
}

export default CartItems



