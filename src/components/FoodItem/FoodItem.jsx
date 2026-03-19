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
import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, name, description, price, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();

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
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div className="food-item-bottom">
                    <p className="food-item-price">${price}</p>
                    {!cartItems[id]
                        ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add" />
                        : <div className="food-item-counter">
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodItem;