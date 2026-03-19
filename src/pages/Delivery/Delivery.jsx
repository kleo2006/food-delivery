import React from 'react'
import "./Delivery.css"
import { useNavigate } from 'react-router-dom'

const Delivery = () => {
    const navigate = useNavigate();

    return (
        <div className="delivery">

            {/* Hero */}
            <div className="delivery-hero">
                <h1>Fast & Fresh <span>Delivery</span></h1>
                <p>From our kitchen to your door — hot, fresh, and on time. Every time.</p>
                <button onClick={() => navigate("/")}>Order Now</button>
            </div>

            {/* How It Works */}
            <div className="delivery-how">
                <h2>How It Works</h2>
                <div className="delivery-steps">
                    <div className="delivery-step">
                        <div className="delivery-step-number">1</div>
                        <h3>Browse & Choose</h3>
                        <p>Explore our menu and pick your favorite dishes from our wide selection of cuisines.</p>
                    </div>
                    <div className="delivery-step-arrow">→</div>
                    <div className="delivery-step">
                        <div className="delivery-step-number">2</div>
                        <h3>Place Your Order</h3>
                        <p>Add items to your cart, enter your delivery address and confirm your order.</p>
                    </div>
                    <div className="delivery-step-arrow">→</div>
                    <div className="delivery-step">
                        <div className="delivery-step-number">3</div>
                        <h3>We Prepare It</h3>
                        <p>Our restaurant partners start preparing your meal fresh as soon as your order is confirmed.</p>
                    </div>
                    <div className="delivery-step-arrow">→</div>
                    <div className="delivery-step">
                        <div className="delivery-step-number">4</div>
                        <h3>Delivered to You</h3>
                        <p>Our delivery team brings your order straight to your door, hot and on time.</p>
                    </div>
                </div>
            </div>

            {/* Delivery Info Cards */}
            <div className="delivery-info">
                <div className="delivery-info-card">
                    <div className="delivery-info-icon">⏱️</div>
                    <h3>Delivery Time</h3>
                    <p>Average delivery time is <strong>25-35 minutes</strong> depending on your location and order size.</p>
                </div>
                <div className="delivery-info-card">
                    <div className="delivery-info-icon">💰</div>
                    <h3>Delivery Fee</h3>
                    <p>Flat delivery fee of <strong>$2.00</strong> on all orders. Free delivery on orders above <strong>$30</strong>.</p>
                </div>
                <div className="delivery-info-card">
                    <div className="delivery-info-icon">📍</div>
                    <h3>Delivery Zones</h3>
                    <p>We currently deliver within a <strong>15 km radius</strong> of our partner restaurants.</p>
                </div>
                <div className="delivery-info-card">
                    <div className="delivery-info-icon">🕐</div>
                    <h3>Working Hours</h3>
                    <p>We deliver every day from <strong>9:00 AM</strong> to <strong>11:00 PM</strong>, including weekends.</p>
                </div>
            </div>

            {/* FAQ */}
            <div className="delivery-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="delivery-faq-list">
                    <div className="delivery-faq-item">
                        <h3>Can I track my order?</h3>
                        <p>Yes! Once your order is confirmed you will receive updates via email about your order status.</p>
                    </div>
                    <div className="delivery-faq-item">
                        <h3>What if my order is late?</h3>
                        <p>If your order is delayed beyond the estimated time, please contact us and we will resolve it immediately.</p>
                    </div>
                    <div className="delivery-faq-item">
                        <h3>Can I change my delivery address?</h3>
                        <p>You can change your address before the restaurant confirms your order. After that, changes may not be possible.</p>
                    </div>
                    <div className="delivery-faq-item">
                        <h3>What if an item is missing?</h3>
                        <p>Contact our support team immediately and we will either resend the item or issue a full refund.</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="delivery-cta">
                <h2>Ready to get your food delivered?</h2>
                <p>Browse our menu and place your order in just a few clicks.</p>
                <button onClick={() => navigate("/")}>Order Now 🚀</button>
            </div>

        </div>
    )
}

export default Delivery