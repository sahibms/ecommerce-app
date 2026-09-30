import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();

    const handleRegister = () => {
        if (name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === ""
        ) {
            alert("Please fill all fields");

        } else if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            alert("Register successful!")

        }


    }
    return (
        <div className="register-page">
            <h1 className="register-title">Register </h1>

            <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input"
                    type="text"
                    placeholder="Enter Your Name"
                />
            </div>
            < div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input"
                    type="email"
                    placeholder="Enter Your Email"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input"
                    type="password"
                    placeholder="Enter Your Password"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input className="form-input"
                    type="password"
                    placeholder="Confirm Your Password"
                />
            </div>

            <button className="register-btn">Register</button>

            <p className="register-login-text">Already have an account?{""}
                <span className="login-link" onClick={() => navigate("/login")}>Login</span>
            </p>


        </div>
    );
}
export default Register;