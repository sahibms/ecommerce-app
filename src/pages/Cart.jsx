import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeCart, total, handleCheckout }) {
    const navigate = useNavigate();
    return (
        <div className="cart-container">
            <h1 className="cart-title">Cart</h1>
            {cart.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cart.map((product) => (
                            <div className="cart-item" key={product.id}>
                                <div className="cart-item-image">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title} />
                                </div>
                                <div className="cart-item-details">
                                    <h2 className="cart-item-title">{product.title}</h2>
                                    <p className="cart-item-price">{product.price}</p>
                                </div>
                                <div className="quantity-control">
                                    <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                                    <span className="quantity-value">{product.quantity}</span>
                                    <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeCart(product.id)}>Remove</button>
                            </div>

                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2 className="cart-total">Total:💲{total}</h2>
                        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                    </div>
                </>

            ) : (
                <>
                    <p className="cart-empty-message">Your Cart is Empty <ShoppingCart /></p>
                    <button className="continue-shopping-button" onClick={() => navigate("/products")}>Continue Shopping</button>
                </>

            )}


        </div>
    );
}
export default Cart;