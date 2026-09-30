import { useNavigate } from "react-router-dom";

function Notfound() {

    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <h1 className="not-found-code">404</h1>
            <h2 className="not-found-title">Page Not Found</h2>
            <p className="not-found-text">Sorry,the page you're looking for doesn't exist</p>
            <button className="continue-shopping-btn" onClick={() => navigate("/products")}>Continue Shopping</button>

        </div>
    );
}
export default Notfound;