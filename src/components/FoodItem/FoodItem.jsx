// import React, { useContext, } from 'react'
// import "./FoodItem.css"
// import { assets } from '../../assets/frontend_assets/assets'
// import { StoreContext } from '../../context/StoreContext';
// const FoodItem = ({id,name,description,price,image}) => {

    
//     const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
//   return (
//     <div className="food-item">
//         <div className="food-item-img-container">
//           <img className="food-item-image" src={image} alt=""/>

//           {
//             !cartItems[id]
//             ? <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
//             : <div className="food-item-counter">
//               <img onClick={()=>removeFromCart(id)} 
//               src={assets.remove_icon_red} alt=""/>
//               <p>{cartItems[id]}</p>
//               <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
//             </div>
    
//           }
//         </div>
//         <div className="food-item-info">
//          <div className="food-item-rating">
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt=""/>
//          </div>
//          <p className="food-item-desc">{description}</p>
//          <p className="food-item-price">${price}</p>
//         </div>
      
//     </div>
//   )
// }

// export default FoodItem
import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, name, description, price, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

    const handleAddToCart = () => {
        if (quantity === 0) return;
        for (let i = 0; i < quantity; i++) {
            addToCart(id);
        }
        navigate(`/food/${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="food-item">
            <div className="food-item-img-container" onClick={() => navigate(`/food/${id}`)}>
                <img className="food-item-image" src={image} alt={name} />
                <div className="food-item-overlay">
                    <p>View Details</p>
                </div>
            </div>

            <div className="food-item-info">
                <div className="food-item-rating">
                    <p onClick={() => navigate(`/food/${id}`)} style={{ cursor: "pointer" }}>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div className="food-item-bottom">
                    <p className="food-item-price">${price}</p>
                </div>

                {/* Quantity Selector */}
                <div className="food-item-quantity-selector">
                    <img onClick={decreaseQty} src={assets.remove_icon_red} alt="decrease" />
                    <p>{quantity}</p>
                    <img onClick={increaseQty} src={assets.add_icon_green} alt="increase" />
                </div>

                {/* Add to Cart Button - only shows when quantity > 0 */}
                {quantity > 0 && (
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to Cart 🛒
                    </button>
                )}
            </div>
        </div>
    )
}

export default FoodItem;