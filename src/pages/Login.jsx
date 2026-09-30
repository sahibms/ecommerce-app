import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = () => {
        if (
            email.trim() === "" ||
            password.trim === ""
        ) {
            alert("Please enter your email and password")
        } else {
            setLoggedIn(true);
            alert("Login successfull🎉")
            setEmail("");
            setPassword("");

        }


    }

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input"
                    type="password"
                    value={password}
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>


            <button className="login-btn" onClick={handleLogin}>Login</button>

            <p className="login-register-text">Don't have an account?{""}
                <span className="register-link" onClick={() => navigate("/register")}>Register</span>
            </p>

        </div>
    );
}
export default Login;