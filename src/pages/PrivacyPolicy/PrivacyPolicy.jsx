import React from 'react'
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {

    return (
        <div className="privacy">
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p className="privacy-updated">Last updated: March 2026</p>

                <div className="privacy-section">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Tomato. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our services.</p>
                </div>

                <div className="privacy-section">
                    <h2>2. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as:</p>
                    <ul>
                        <li>Name, email address, and password when you create an account</li>
                        <li>Delivery address and phone number when placing an order</li>
                        <li>Payment information (processed securely — we do not store card details)</li>
                        <li>Order history and preferences</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Process and deliver your orders</li>
                        <li>Send you order confirmations and updates</li>
                        <li>Improve our services and personalize your experience</li>
                        <li>Communicate with you about promotions and new features</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>4. Sharing Your Information</h2>
                    <p>We do not sell your personal information. We may share your information with:</p>
                    <ul>
                        <li>Restaurant partners to fulfill your orders</li>
                        <li>Delivery partners to deliver your food</li>
                        <li>Payment processors to handle transactions</li>
                        <li>Law enforcement when required by law</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>5. Cookies</h2>
                    <p>We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookies through your browser settings.</p>
                </div>

                <div className="privacy-section">
                    <h2>6. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                </div>

                <div className="privacy-section">
                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Opt out of marketing communications</li>
                        <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>8. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:contact@tomato.al">contact@tomato.al</a></li>
                        <li>Phone: <a href="tel:+12124567890">+1-212-456-7890</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy