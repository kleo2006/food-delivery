import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const response = await fetch(`${url}/api/orders/verify`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ success, orderId })
                });

                const result = await response.json();

                if (result.success) {
                    setCartItems({});
                    navigate("/");
                } else {
                    navigate("/");
                }
            } catch (error) {
                navigate("/");
                console.log(error);
            }
        }

        verifyPayment();
    }, []);

    return (
        <div className="verify">
            <div className="verify-container">
                {success === "true" ? (
                    <>
                        <div className="verify-icon success">✅</div>
                        <h2>Payment Successful!</h2>
                        <p>Your order has been placed successfully. Redirecting...</p>
                    </>
                ) : (
                    <>
                        <div className="verify-icon failed">❌</div>
                        <h2>Payment Failed</h2>
                        <p>Something went wrong with your payment. Redirecting...</p>
                    </>
                )}
                <div className="verify-spinner"></div>
            </div>
        </div>
    )
}

export default Verify