import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'
import "./FoodDetail.css"

const FoodDetail = () => {
    const { id } = useParams();
    const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const item = food_list.find((food) => food._id === id);

    if (!item) {
        return (
            <div className="food-detail-not-found">
                <p>Product not found.</p>
                <button onClick={() => navigate("/")}>Go Back Home</button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(item._id);
        navigate("/cart");
    }

    return (
        <div className="food-detail">
            <button className="food-detail-back" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <div className="food-detail-container">
                {/* Left - Image */}
                <div className="food-detail-left">
                    <img src={item.image} alt={item.name} className="food-detail-image" />
                </div>

                {/* Right - Info */}
                <div className="food-detail-right">
                    <h1 className="food-detail-name">{item.name}</h1>

                    <div className="food-detail-rating">
                        <img src={assets.rating_starts} alt="rating" />
                        <span>(120+ reviews)</span>
                    </div>

                    <p className="food-detail-description">{item.description}</p>

                    <div className="food-detail-price">
                        <span>${item.price}</span>
                    </div>

                    <div className="food-detail-category">
                        <p>Category: <strong>{item.category}</strong></p>
                    </div>

                    {/* Cart Controls */}
                    <div className="food-detail-actions">
                        {!cartItems[item._id] ? (
                            <button className="food-detail-add-btn" onClick={handleAddToCart}>
                                Add to Cart 🛒
                            </button>
                        ) : (
                            <div className="food-detail-counter">
                                <div className="counter-controls">
                                    <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt="remove" />
                                    <p>{cartItems[item._id]}</p>
                                    <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="add" />
                                </div>
                                <button className="food-detail-cart-btn" onClick={() => navigate("/cart")}>
                                    Go to Cart 🛒
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDetail;