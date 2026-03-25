import React, { useState, useContext } from 'react'
import "./LoginPopup.css";
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { url, setToken } = useContext(StoreContext);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const endpoint = currState === "Login" ? "/api/auth/login" : "/api/auth/register";
            const body = currState === "Login"
                ? { email: data.email, password: data.password }
                : { name: data.name, email: data.email, password: data.password };

            const response = await fetch(`${url}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const result = await response.json();

            if (result.success) {
                setToken(result.token);
                localStorage.setItem("token", result.token);
                setShowLogin(false);
                if (result.success) {
    setToken(result.token);
    localStorage.setItem("token", result.token);
    setShowLogin(false);
    window.location.reload();
}
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.log(err);
        }

        setLoading(false);
    }
    

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={onSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Sign up" && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={data.name}
                            onChange={onChangeHandler}
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={onChangeHandler}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={data.password}
                        onChange={onChangeHandler}
                        required
                    />
                </div>

                {error && <p className="login-error">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Please wait..." : currState === "Sign up" ? "Create Account" : "Login"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>

                {currState === "Login"
                    ? <p>Create new account? <span onClick={() => setCurrState("Sign up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup;