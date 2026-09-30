import Productcard from "../components/ProductCard";
import Product from "./Product";

function Favorites({ favorites, toggleFavorite, }) {

    return (
        <div className="favorites-page">
            <h1 className="favorites-title">
                Favorites Products
            </h1>

            <div className="favorites-products">
                {favorites.length > 0 ? (
                    favorites.map((product) => (
                        <Productcard
                            key={product.id}
                            product={product}
                            toggleFavorite={toggleFavorite}
                            favorites={favorites}
                        />
                    ))
                ) : (
                    <p className="favorites-empty">Your Favorites are empty</p>
                )}

            </div>

        </div>
    );
}
export default Favorites;