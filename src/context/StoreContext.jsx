
/* eslint-disable react-refresh/only-export-components */

// import { createContext, } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
// import { useState } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {

//  const [cartItems, setCartItems]=useState({});

//    const addToCart=(itemId)=>{
//       if(!cartItems[itemId]){
//         setCartItems((prev)=>({...prev,[itemId]:1}))
//       }else{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

//       }
//    }
//    const removeFromCart=(itemId)=>{
    
//       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
//    }
   
//     const getTotalCartAmount=()=>{
//       let totalAmount=0;
//        for(const item in cartItems){
//         if(cartItems[item]>0){
//            let itemInfo=food_list.find((product)=>product._id===item);
//         totalAmount +=itemInfo.price*cartItems[item];
//         }
        
        
//        }
//        return totalAmount;
//     }



//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  const url = "http://localhost:4000";

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    searchQuery,
    setSearchQuery,
    token,
    setToken,
    user,
    setUser,
    url,
    logout
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;