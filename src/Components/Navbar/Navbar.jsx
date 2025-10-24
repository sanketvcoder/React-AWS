import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cartIcon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ track login status
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Update screen size dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px"/>
        <p>Shopify</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=> setMenu("home")}><Link style={{textDecoration:"none",color: "#626262"}} to="/">Home</Link>{menu === "home" ? <hr/> : null}</li>
        <li onClick={()=> setMenu("mens")}><Link style={{textDecoration:"none",color: "#626262"}} to="/mens">Men</Link>{menu === "mens" ? <hr/> : null}</li>
        <li onClick={()=> setMenu("womens")}><Link style={{textDecoration:"none",color: "#626262"}} to="/womens">Women</Link>{menu === "womens" ? <hr/> : null}</li>
        <li onClick={()=> setMenu("kids")}><Link style={{textDecoration:"none",color: "#626262"}} to="/kids">Kids</Link>{menu === "kids" ? <hr/> : null}</li>
      </ul>

      {/* ✅ LOGIN + CART SECTION */}
      <div className="nav-login-cart">
        {/* If screen is large → show both */}
        {!isMobile && (
          <>
            {!isLoggedIn ? (
              <Link to="/login">
                <button>Login</button>
              </Link>
            ) : null}

            {isLoggedIn && (
              <Link to="/cart">
                <img src={cartIcon} alt="" height="40px" />
              </Link>
            )}
          </>
        )}

        {/* If screen is small → show only one */}
        {isMobile && (
          <>
            {isLoggedIn ? (
              <Link to="/cart">
                <img src={cartIcon} alt="cart" height="40px" />
              </Link>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </>
        )}

        {isLoggedIn && <div className="nav-cart-count">0</div>}
      </div>
    </div>
  )
}

export default Navbar
