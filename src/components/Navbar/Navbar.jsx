// import { useRef, useState } from "react"
// import "./Navbar.css"
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ShopContext } from '../../context/ShopContext';
// import navdropdown_icon from '../Assets/navdropdown.png'



// const Navbar = ()=> {
//   const [menu,setMenu]= useState("shop");
//   const {getTotalCartItems} = useContext(ShopContext);

//   const refMenu = useRef();

//   const dropDown_toggle =(e)=>{
//     refMenu.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }

//   return (
//       <div className="navbar">

//         <div className="nav-logo">
//           <img src="src/components/Assets/fashionhub4.PNG" alt="" />
//           <p>Fashion-Hub</p>
//         </div>

//         <img className="nav-dropdown" onClick={dropDown_toggle} src={navdropdown_icon} alt="" />
//         <ul rel={refMenu} className="nav-menu">
//           <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//         </ul>

//         <div className="nav-cart-login">
//          <Link to='/login'><button>Login</button></Link> 
//           <Link to='/cart'><img src="src\components\Assets\cart_icon.png" alt="" /></Link>
//           <div className="nav-cart-count">{getTotalCartItems()}</div>
//         </div>
//       </div>
//   )
// }

// export default Navbar
import { useRef, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from '../../context/ShopContext';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import navdropdown from '../Assets/navdropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FashionHub</p>
      </div>

      <img className="nav-dropdown" onClick={dropDown_toggle} src={navdropdown}alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-cart-login">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
