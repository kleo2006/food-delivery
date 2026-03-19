// import React, { useContext, useState } from 'react';
// import "./Navbar.css";
// import { assets } from '../../assets/frontend_assets/assets';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// const Navbar = ({setShowLogin}) => {
//     const [menu, setMenu]=useState("Home");
//     const {getTotalCartAmount} = useContext(StoreContext)
//   return (
//     <div className="navbar">
//     <Link to="/" > <img src={assets.logo} alt='navbar' className="logo" /></Link>
//      <ul className="navbar-menu">
//         <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home" ? "active" : " "}>Home</Link>
//         <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</a>
//         <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active" : "" }>Mobile-App</a>
//         <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu=="Contact us" ? "active": " "}>Contact us</a>
//      </ul>
//      <div className="navbar-right">
//         <img src={assets.search_icon} alt="icon" />
//      </div>
//      <div className="navbar-search-icon">
//       <Link to="/cart"> <img src={assets.basket_icon} alt='basket' /></Link>
//         <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
//      </div>
//      <button onClick={()=>setShowLogin(true)}>Sign in</button>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
 
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartAmount } = useContext(StoreContext);
 
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMenu = () => setMobileMenuOpen(false);
 
    return (
        <div className="navbar">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
                <img src={assets.logo} alt="navbar" className="logo" />
            </Link>
 
            {/* Desktop Menu */}
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href="#app-download" onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                <a href="#footer" onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
            </ul>
 
            {/* Right Icons */}
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="basket" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
 
            {/* Hamburger Button (mobile only) */}
            <div className="hamburger" onClick={toggleMobileMenu}>
                <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
                <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
                <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
            </div>
 
            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => { setMenu("Home"); closeMenu(); }} className={menu === "Home" ? "active" : ""}>Home</Link>
                    <a href="#explore-menu" onClick={() => { setMenu("Menu"); closeMenu(); }} className={menu === "Menu" ? "active" : ""}>Menu</a>
                    <a href="#app-download" onClick={() => { setMenu("Mobile-App"); closeMenu(); }} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                    <a href="#footer" onClick={() => { setMenu("Contact us"); closeMenu(); }} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
                    <button onClick={() => { setShowLogin(true); closeMenu(); }}>Sign in</button>
                </div>
            )}
        </div>
    );
}
 
export default Navbar;