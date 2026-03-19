import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import About from '../About/About';
import Delivery from '../Delivery/Delivery';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Main Sections */}
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      

      {/* About Section */}
      <div id="about-section">
        <About />
      </div>

      {/* Delivery Section */}
      <div id="delivery-section">
        <Delivery />
      </div>

      {/* Privacy Policy Section */}
      <div id="privacy-section">
        <PrivacyPolicy />
        <AppDownload/>
      </div>
    </div>
  )
}

export default Home