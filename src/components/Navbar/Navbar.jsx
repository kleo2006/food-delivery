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
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { getTotalCartAmount, searchQuery, setSearchQuery } = useContext(StoreContext);
    const navigate = useNavigate();

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMenu = () => setMobileMenuOpen(false);

    const handleSearchIcon = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchQuery("");
        } else {
            navigate("/");
        }
    };

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
                <a href="#about-section" onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>About</a>
                <a href="#delivery-section" onClick={() => setMenu("Delivery")} className={menu === "Delivery" ? "active" : ""}>Delivery</a>
                <a href="#footer" onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
            </ul>

            {/* Right Icons */}
            <div className="navbar-right">
                {/* Search */}
                <div className="navbar-search-wrapper">
                    <img
                        src={assets.search_icon}
                        alt="search icon"
                        className={`search-icon ${showSearch ? "active-search" : ""}`}
                        onClick={handleSearchIcon}
                    />
                    {showSearch && (
                        <div className="search-bar-container">
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search for dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        navigate("/");
                                        setTimeout(() => {
                                            const el = document.getElementById("food-display");
                                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }, 100);
                                    }
                                }}
                                autoFocus
                            />
                            <span className="search-close" onClick={handleSearchIcon}>✕</span>
                        </div>
                    )}
                </div>

                {/* Cart */}
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="basket" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>

            {/* Mobile Icons (search icon + hamburger) */}
            <div className="mobile-icons">
                <img
                    src={assets.search_icon}
                    alt="search"
                    className="mobile-search-icon-btn"
                    onClick={handleSearchIcon}
                />
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {/* Mobile Full-Width Search Bar (below navbar) */}
            {showSearch && (
                <div className="mobile-search-fullwidth">
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                navigate("/");
                                setTimeout(() => {
                                    const el = document.getElementById("food-display");
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, 100);
                            }
                        }}
                        autoFocus
                    />
                    <span onClick={handleSearchIcon}>✕</span>
                </div>
            )}

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => { setMenu("Home"); closeMenu(); }} className={menu === "Home" ? "active" : ""}>Home</Link>
                    <a href="#explore-menu" onClick={() => { setMenu("Menu"); closeMenu(); }} className={menu === "Menu" ? "active" : ""}>Menu</a>
                    <a href="#about-section" onClick={() => { setMenu("About"); closeMenu(); }} className={menu === "About" ? "active" : ""}>About</a>
                    <a href="#delivery-section" onClick={() => { setMenu("Delivery"); closeMenu(); }} className={menu === "Delivery" ? "active" : ""}>Delivery</a>
                    <a href="#privacy-section" onClick={() => { setMenu("Privacy"); closeMenu(); }} className={menu === "Privacy" ? "active" : ""}>Privacy Policy</a>
                    <a href="#footer" onClick={() => { setMenu("Contact"); closeMenu(); }} className={menu === "Contact" ? "active" : ""}>Contact</a>
                    <button onClick={() => { setShowLogin(true); closeMenu(); }}>Sign in</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;