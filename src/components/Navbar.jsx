import { Link } from "react-router-dom";
import { useState } from "react";
import {Menu} from "lucide-react"

function NavBar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const closeMenu = ()=>{
        setIsMenuOpen(false);
    }
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/"><h1>Cartly</h1></Link>
            </div>

            <button className="menu-toggle" onClick={()=>setIsMenuOpen(!isMenuOpen)}><Menu/></button>

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <Link className="nav-link" onClick={closeMenu}  to="/">Home</Link>
                <Link className="nav-link" onClick={closeMenu}  to="/products">Product</Link>
                <Link className="nav-link" onClick={closeMenu}  to="/favorites">Favorites</Link>
                <Link className="nav-link" onClick={closeMenu}  to="/cart">Cart</Link>
                <Link className="nav-link" onClick={closeMenu}  to="/about">About</Link>
                <Link className="nav-link" onClick={closeMenu}  to="/login">Login</Link>
            </div>


        </div>
    );
}
export default NavBar;