import React from 'react'
import "./About.css"
import { assets } from '../../assets/frontend_assets/assets'

const About = () => {

    const scrollToMenu = () => {
        const el = document.getElementById("explore-menu");
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }

    const scrollToFood = () => {
        const el = document.getElementById("food-display");
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }

    return (
        <div className="about">

            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-text">
                    <h1>About <span>Tomato</span></h1>
                    <p>We are passionate about connecting people with the best local food, delivered fast and fresh to their door.</p>
                    <button onClick={scrollToMenu}>Explore Our Menu</button>
                </div>
                <div className="about-hero-image">
                    <img src={assets.header_img} alt="about hero" />
                </div>
            </div>

            {/* Our Story */}
            <div className="about-section">
                <h2>Our Story</h2>
                <p>Tomato was founded in 2020 with a simple mission — to make great food accessible to everyone. What started as a small local delivery service has grown into a platform trusted by thousands of customers every day. We work closely with the best local restaurants and chefs to bring you meals that are crafted with love and delivered with care.</p>
            </div>

            {/* Values */}
            <div className="about-values">
                <div className="about-value-card">
                    <h3>🍅 Fresh Ingredients</h3>
                    <p>We partner only with restaurants that use the freshest, highest quality ingredients in every dish.</p>
                </div>
                <div className="about-value-card">
                    <h3>⚡ Fast Delivery</h3>
                    <p>Our delivery network ensures your food arrives hot and on time, every single time.</p>
                </div>
                <div className="about-value-card">
                    <h3>❤️ Customer First</h3>
                    <p>Your satisfaction is our priority. We're here 24/7 to make sure your experience is perfect.</p>
                </div>
                <div className="about-value-card">
                    <h3>🌍 Community</h3>
                    <p>We support local businesses and communities by giving small restaurants a platform to grow.</p>
                </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
                <div className="about-stat">
                    <h2>50+</h2>
                    <p>Restaurant Partners</p>
                </div>
                <div className="about-stat">
                    <h2>10K+</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="about-stat">
                    <h2>30 min</h2>
                    <p>Average Delivery Time</p>
                </div>
                <div className="about-stat">
                    <h2>4.8 ⭐</h2>
                    <p>Average Rating</p>
                </div>
            </div>

            {/* CTA */}
            <div className="about-cta">
                <h2>Ready to order?</h2>
                <p>Browse our menu and get your favorite meal delivered in minutes.</p>
                <button onClick={scrollToFood}>Order Now</button>
            </div>

        </div>
    )
}

export default About