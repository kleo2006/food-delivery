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
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App;