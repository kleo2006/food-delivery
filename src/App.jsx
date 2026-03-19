//  import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar';
//  import { Routes, Route } from 'react-router';
//  import Home from './pages/Home/Home';
//  import Cart from './pages/Cart/Cart';
//  import PlaceHolder from './pages/PlaceOrder/PlaceHolder';
// import Footer from './components/Footer/Footer';
// import LoginPopup from './components/LoginPopup/LoginPopup';
//  const App = () => {
//     const [showLogin,setShowLogin]=useState(false)
//    return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/> : <></>}
//      <div  className="app">
//       <Navbar setShowLogin={setShowLogin}/>
//       <Routes>
//        <Route path="/" element={<Home/>}/>
//        <Route path="/cart" element={<Cart/>}/>
//        <Route path="/order" element={<PlaceHolder/>}/>
//       </Routes>
//      </div>
//    <Footer/>
//     </>
     
//    )
//  }
 
//  export default App;
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceHolder from './pages/PlaceOrder/PlaceHolder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import FoodDetail from './pages/FoodDetail/FoodDetail';
import About from './pages/About/About';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Delivery from './pages/Delivery/Delivery';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceHolder />} />
                    <Route path="/food/:id" element={<FoodDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/delivery" element={<Delivery />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App;