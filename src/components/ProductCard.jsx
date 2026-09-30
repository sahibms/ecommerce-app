import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react"
import { ShoppingCart } from "lucide-react";

function Productcard({ product, toggleFavorite, addToCart, favorites }) {


    const navigate = useNavigate();

    const isFavorite = favorites.some((favoriteproduct)=>(
        favoriteproduct.id === product.id
    ));


    return (
        <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
            <div className="product-image-container">
                <img className="product-image"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <button className="product-favorite" onClick={(e) => { e.stopPropagation(); toggleFavorite(product) }}>
                    <Heart
                    fill={isFavorite ? "red" : "none"}
                    color={isFavorite ? "red" : "currentColor"}
                     />
                </button>

            </div>

            <h3 className="product-title">
                {product.title}
            </h3>
            <p className="product-price">
                💲{product.price}
            </p>
            <p className="product-rating">
                ⭐{product.rating}
            </p>
            <p className="product-discount">
                {product.discountPercentage}%OFF
            </p>
            <button className="product-cart" onClick={(e) => { e.stopPropagation(); addToCart(product) }}><ShoppingCart />Add To Cart</button>

        </div>
    );
}
export default Productcard;