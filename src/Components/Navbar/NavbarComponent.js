import React, { useContext, useState }  from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css'
import logo from '../Assets/logo.png';  
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';

const NavbarComponent = () => {
  const [menu,setMenu]= useState("Shop");
  const {getTotalCartItems}= useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ShopSphere</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style ={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style ={{textDecoration: 'none'}} to ='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style ={{textDecoration: 'none'}} to ='/Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style ={{textDecoration: 'none'}} to ='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to= '/Login'><button>Login</button></Link>
        <Link to= '/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavbarComponent;
