import React, { useContext, useState } from 'react'
import "./PlaceHolder.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceHolder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const placeOrder = async (e) => {
        e.preventDefault();

        if (!token) {
            alert("Please login to place an order!");
            return;
        }

        if (getTotalCartAmount() === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Build order items from cart
        let orderItems = [];
        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = { ...item, quantity: cartItems[item._id] };
                orderItems.push(itemInfo);
            }
        });

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2
        };

        try {
            const response = await fetch(`${url}/api/orders/place`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": token
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (result.success) {
                // Redirect to Stripe checkout
                window.location.replace(result.session_url);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error placing order. Please try again.");
            console.log(error);
        }
    }

    return (
        <form className="place-order" onSubmit={placeOrder}>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" name="firstName" placeholder='First Name' value={data.firstName} onChange={onChangeHandler} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={onChangeHandler} required />
                </div>
                <input type="email" name="email" placeholder="Email" value={data.email} onChange={onChangeHandler} required />
                <input type="text" name="street" placeholder="Street" value={data.street} onChange={onChangeHandler} required />
                <div className="multi-fields">
                    <input type="text" name="city" placeholder='City' value={data.city} onChange={onChangeHandler} required />
                    <input type="text" name="state" placeholder="State" value={data.state} onChange={onChangeHandler} required />
                </div>
                <div className="multi-fields">
                    <input type="text" name="zipCode" placeholder='Zip Code' value={data.zipCode} onChange={onChangeHandler} required />
                    <input type="text" name="country" placeholder="Country" value={data.country} onChange={onChangeHandler} required />
                </div>
                <input type="text" name="phone" placeholder="Phone Number" value={data.phone} onChange={onChangeHandler} required />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button type="submit">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceHolder